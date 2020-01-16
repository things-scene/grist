import { getHandler } from '../handlers'

export const buildRowsOptions = rows => {
  var { appendable = true, insertable = false, selectable, groups = [], totals = [] } = rows

  /* handler */
  var { click, dblclick } = rows.handlers || {}

  return {
    appendable,
    insertable,
    selectable,
    groups,
    totals,
    handlers: {
      click: getHandler(click),
      dblclick: getHandler(dblclick)
    }
  }
}
