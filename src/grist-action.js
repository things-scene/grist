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
      type: 'checkbox',
      label: 'run-at-startup',
      name: 'runAtStartup'
    },
    {
      type: 'textarea',
      label: 'record-format',
      name: 'recordFormat'
    }
  ]
}

import { Component, ValueHolder, RectPath } from '@hatiolab/things-scene'

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
    if (this.state.runAtStartup) this.doAction()
  }

  dispose() {
    super.dispose()
  }

  onclick() {
    this.doAction()
  }

  onchange(after) {
    if ('value' in after) this.doAction()
    if ('action' in after && this.targetGrist) {
      if (after.action == ACTIONS.GET_PAGE_INFO)
        this.targetGrist.beforeFetchFuncs[this.uuid] = fetchedData => {
          this.data = this.getPageInfoFrom(null, fetchedData)
          this.doDataMap()
        }
      else delete this.targetGrist.beforeFetchFuncs[this.uuid]
    }
  }

  // 데이터 매핑을 수동으로 실행하기 위해 기존의 메소드를 무효화
  executeMappings() {
    console.log(
      "The method 'executingMappings' is overriden in the component 'grist-action', because of to prevent executing when initialize."
    )
  }

  // 데이터 매핑을 수동으로 조작하기 위한 새 메소드
  doDataMap() {
    super.executeMappings()
  }

  doAction(action) {
    if (!this.app.isViewMode) return
    var { action: storedAction } = this.state
    action = action || storedAction

    var { element: grist } = this.targetGrist || {}
    if (!grist) return

    var data
    switch (action) {
      case ACTIONS.GET_ALL_ROWS:
        data = grist.grist.data
        break
      case ACTIONS.COMMIT:
        grist.commit()
        break
      case ACTIONS.GET_SELECTED:
        data = grist.selected
        break
      case ACTIONS.GET_DIRTY:
        data = this.assortDirties(grist)
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
        data = this.getPageInfoFrom(grist)
        break
    }

    if (data) {
      this.data = data
      this.doDataMap()
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
    return records
  }

  getPageInfoFrom(grist, fetchedData) {
    var { page = 1, limit = 20, sorters = [] } =
      fetchedData || (grist && grist.dataProvider) || pagination(grist)

    sorters = sorters.map(sorter => {
      sorter.desc = sorter.desc ? true : false
      return sorter
    })
    return { page, limit, sorters }

    function pagination(grist) {
      var config = grist && grist.config && grist.config.pagination
      if (config)
        return {
          page: config.page,
          limit: config.limit || (config.pages && config.pages[0])
        }
      else return {}
    }
  }

  render(context) {
    var { top, left, height, width, fillStyle = 'transparent' } = this.model

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

  get data() {
    return this._data
  }

  set data(data) {
    this._data = data
  }
}

Component.register('grist-action', GristAction)
