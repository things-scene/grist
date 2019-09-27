/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import uuid from 'uuid'

export const ACTIONS = {
  GET_ALL_ROWS: 'getAllRows',
  COMMIT: 'commit',
  GET_SELECTED: 'getSelectedRows',
  GET_DIRTY: 'getDirtyRows',
  ADD_ROW: 'addRow',
  DELETE_SELECTED_ROWS: 'deleteSelectedRowsSoftly',
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
            display: 'Delete selected rows',
            value: ACTIONS.DELETE_SELECTED_ROWS
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
  constructor(...args) {
    super(...args)

    this.uuid = uuid.v4()
  }

  static get nature() {
    return NATURE
  }

  ready() {
    this.onchange({ action: this.state.action })
  }

  dispose() {
    super.dispose()
  }

  onclick(e) {
    this.doAction()
  }

  onchange(after, before) {
    if ('value' in after) this.doAction()
    if ('action' in after && this.targetGrist) {
      if (after.action == ACTIONS.GET_PAGE_INFO)
        this.targetGrist.beforeFetchFuncs[this.uuid] = fetchedData => {
          this.set('data', this.getPageInfoFrom(null, fetchedData))
        }
      else delete this.targetGrist.beforeFetchFuncs[this.uuid]
    }
  }

  doAction(action) {
    if (!this.app.isViewMode) return
    var { action: storedAction } = this.state
    action = action || storedAction

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
        this.set('data', this.assortDirties(grist))
        break
      case ACTIONS.ADD_ROW:
        {
          var records = grist.dirtyData.records || []

          let recordFormat
          try {
            recordFormat = eval(`(${this.state.recordFormat})`)
          } catch (e) {
            console.log(
              'Invalid JSON format. It will be assumed as empty object.\n',
              e
            )
            recordFormat = {}
          }
          records.push({ ...recordFormat, __dirty__: '+' })
          this.refreshGrist(grist)
        }
        break
      case ACTIONS.DELETE_SELECTED_ROWS:
        {
          var records = grist.dirtyData.records || []

          records.forEach((record, idx) => {
            if (record['__selected__']) {
              if (record['__dirty__'] == '+') delete records[idx]
              else record['__dirty__'] = '-'
            }
          })
          grist.dirtyData.records = records.flat()
          this.refreshGrist(grist)
        }
        break
      case ACTIONS.GET_PAGE_INFO:
        this.set('data', this.getPageInfoFrom(grist))
        break
    }
  }

  refreshGrist(grist) {
    grist = grist || (this.targetGrist && this.targetGrist.element)
    if (!grist) return
    grist.dataProvider.onRecordChange()
    grist.grist.data = { ...grist.dirtyData }
  }

  assortDirties(grist, dirties) {
    dirties = dirties || grist.dirtyRecords
    var records = {
      original: dirties,
      created: [],
      updated: [],
      deleted: []
    }
    dirties.forEach(record => {
      switch (record['__dirty__']) {
        case 'M':
          records.updated.push(record)
          break
        case '+':
          records.created.push(record)
          break
        case '-':
          records.deleted.push(record)
          break
      }
    })
    return { timestamp: new Date(), records }
  }

  getPageInfoFrom(grist, fetchedData) {
    var { page, limit, sorters = [] } =
      fetchedData || (grist && grist.dataProvider) || {}
    sorters = sorters.map(sorter => {
      sorter.desc = sorter.desc ? true : false
      return sorter
    })
    return { records: { page, limit, sorters }, timestamp: new Date() }
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
