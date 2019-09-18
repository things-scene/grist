/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

export const ACTIONS = {
  GET_ALL_ROWS: 'getAllRows',
  COMMIT: 'commit',
  GET_SELECTED: 'getSelectedRows',
  GET_DIRTY: 'getDirtyRows',
  ADD_ROW: 'addRow',
  GET_PAGE_INFO: 'getPageInfo'
}

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'string',
      label: 'target',
      name: 'target'
    },
    {
      type: 'select',
      label: 'action',
      name: 'action',
      property: {
        options: [
          {
            display: 'Get page information',
            value: ACTIONS.GET_PAGE_INFO
          },
          {
            display: 'Get all rows',
            value: ACTIONS.GET_ALL_ROWS
          },
          {
            display: 'Get selected rows',
            value: ACTIONS.GET_SELECTED
          },
          {
            display: 'Get dirty rows',
            value: ACTIONS.GET_DIRTY
          },
          {
            display: 'Add a row',
            value: ACTIONS.ADD_ROW
          },
          {
            display: 'Commit',
            value: ACTIONS.COMMIT
          }
        ]
      }
    },
    {
      type: 'textarea',
      label: 'record-format',
      name: 'recordFormat'
    }
  ]
}

import { Component, ValueHolder, RectPath, error } from '@hatiolab/things-scene'

export default class GristAction extends ValueHolder(RectPath(Component)) {
  static get nature() {
    return NATURE
  }

  dispose() {
    super.dispose()
  }

  onclick(e) {
    this.doAction()
  }

  onchange(after, before) {
    if ('value' in after) this.doAction()
  }

  doAction() {
    var { action } = this.state
    var { element: grist } = this.targetGrist || {}
    if (!grist) return

    switch (action) {
      case ACTIONS.GET_ALL_ROWS:
        this.set('data', {
          ...grist.data,
          timestamp: new Date()
        })
        break
      case ACTIONS.COMMIT:
        grist.commit()
        break
      case ACTIONS.GET_SELECTED:
        this.set('data', {
          timestamp: new Date(),
          records: grist.selected
        })
        break
      case ACTIONS.GET_DIRTY:
        this.set('data', {
          timestamp: new Date(),
          records: grist.dirtyRecords
        })
        break
      case ACTIONS.ADD_ROW:
        var { records } = grist.data

        var recordFormat = {}
        try {
          recordFormat = JSON.parse(this.state.recordFormat)
        } catch (e) {}

        records = [...records, { ...recordFormat, __dirty__: '+' }]
        grist.data = { ...grist.data, records }
        break
      case ACTIONS.GET_PAGE_INFO:
        var { page, limit } = grist.data
        this.set('data', { page, limit })
        break
    }
  }

  render(context) {
    var {
      top,
      left,
      height,
      width,
      fillStyle = 'transparent',
      reverse
    } = this.model

    // background의 색상
    context.beginPath()
    context.rect(left, top, width, height)

    context.fillStyle = fillStyle
    context.fill()

    // value의 색상
    context.beginPath()

    var drawValue =
      width - (width * Math.max(Math.min(this.animValue, 100), 0)) / 100
    drawValue = Math.max(Math.min(drawValue, width), 0)

    context.rect(left + drawValue, top, width - drawValue, height)

    this.drawFill(context)

    context.closePath()

    context.beginPath()

    context.rect(left, top, width, height)
  }

  postrender(context) {
    this.drawStroke(context)
    this.drawText(context)
  }

  get controls() {}

  get targetGrist() {
    var { target } = this.state
    return this.root.findById(target)
  }
}

Component.register('grist-action', GristAction)
