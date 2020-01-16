import { generateGutterColumn } from '../gutters'
import { getRenderer } from '../renderers'
import { getEditor } from '../editors'
import { getHandler } from '../handlers'

export const buildColumn = column => {
  var compiled = { ...column }

  if (column.type == 'gutter') {
    compiled = generateGutterColumn(column)
  }

  var { header = {}, record = {}, handlers = {}, width = 0 } = compiled

  /* header */

  if (typeof header == 'string') {
    compiled.header = {
      renderer: () => header
    }
  } else {
    var { renderer: headerRenderer } = header

    compiled.header = {
      ...header,
      renderer: getRenderer(headerRenderer)
    }
  }

  /*
   * record
   */
  var { renderer: recordRenderer, editor, editable } = record

  if (!recordRenderer) {
    recordRenderer = getRenderer(column.type)
  }

  if (editable && typeof editor !== 'function') {
    editor = getEditor(column.type)
  }

  compiled.record = {
    ...record,
    renderer: recordRenderer,
    editor
  }

  /* handler */
  var { click, dblclick } = handlers

  compiled.handlers = {
    click: getHandler(click),
    dblclick: getHandler(dblclick)
  }

  return compiled
}
