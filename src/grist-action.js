/*
 * Copyright © HatioLab Inc. All rights reserved.
 *
 * grist 컴포넌트를 보조하여 grist의 각종 동작을 수행하는 컴포넌트.
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
      // 대상 Grist
      type: 'id-input',
      label: 'target-grist',
      name: 'target',
      property: {
        component: 'grist'
      }
    },
    {
      // 동작
      type: 'select',
      label: 'action',
      name: 'action',
      property: {
        options: [
          {
            // 페이지네이션 정보 가져오기
            display: 'Get page information',
            value: ACTIONS.GET_PAGE_INFO
          },
          {
            // 모든 레코드 데이터 가져오기
            display: 'Get all rows',
            value: ACTIONS.GET_ALL_ROWS
          },
          {
            // 체크된 레코드 데이터 가져오기
            display: 'Get selected rows',
            value: ACTIONS.GET_SELECTED
          },
          {
            // 변경 사항이 있는 데이터 가져오기
            display: 'Get dirty rows',
            value: ACTIONS.GET_DIRTY
          },
          {
            // 행 추가
            display: 'Add a row',
            value: ACTIONS.ADD_ROW
          },
          {
            // 선택 행 삭제
            display: 'Delete selected rows',
            value: ACTIONS.DELETE_SELECTED_ROWS
          },
          {
            // 변경 사항을 데이터에 적용
            display: 'Commit',
            value: ACTIONS.COMMIT
          }
        ]
      }
    },
    {
      // 뷰어 시작 시 자동 실행 여부
      type: 'checkbox',
      label: 'run-at-startup',
      name: 'runAtStartup'
    },
    {
      // 행 추가 시의 포맷
      type: 'textarea',
      label: 'record-adder-format',
      name: 'recordFormat'
    }
  ]
}

import { Component, ValueHolder, RectPath } from '@hatiolab/things-scene'

export default class GristAction extends ValueHolder(RectPath(Component)) {
  constructor(...args) {
    super(...args)

    // grist의 fetchHandler를 사용할 때 이 컴포넌트를 판별할 ID
    this.uuid = uuid.v4()
  }

  static get nature() {
    return NATURE
  }

  ready() {
    // 뷰어 시작시에도 action 값이 getPageInfo로 되어 있을 경우 fetchHandler를 등록하기 위해 onchange를 호출함
    this.onchange({ action: this.state.action })
    if (this.state.runAtStartup) this.doAction()
  }

  dispose() {
    super.dispose()
  }

  onclick() {
    // 컴포넌트 클릭 시 동작
    this.doAction()
  }

  onchange(after) {
    // value 값이 바뀌면 동작
    if ('value' in after) this.doAction()
    // action 값이 바뀌면 getPageInfo인지 확인하고 grist에 fetchHandler를 등록하거나 폐기함
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
    console.debug(
      "[@things-factory/grist] The method 'executeMappings' is overriden in the component 'grist-action', because of to prevent executing when initialize."
    )
  }

  // 데이터 매핑을 수동으로 조작하기 위한 새 메소드
  doDataMap() {
    super.executeMappings()
  }

  // action 값에 따라 동작
  doAction(action) {
    if (!this.app.isViewMode) return
    // 파라미터가 명시되어있지 않으면 컴포넌트 속성에서 action 값을 가져옴
    var { action: storedAction } = this.state
    action = action || storedAction

    // 대상 Grist 컴포넌트
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
        data = {
          patches: this.buildPatches(grist.selected),
          original: grist.selected
        }
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
            console.log('Invalid JSON format. It will be assumed as empty object.\n', e)
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

    // 이 컴포넌트의 data 값이 바뀌는 동작은 데이터 매핑까지 실행함
    if (data) {
      this.data = data
      this.doDataMap()
    }
  }

  // 대상 grist 컴포넌트의 레코드를 새로고침
  refreshGrist(grist) {
    grist = grist || (this.targetGrist && this.targetGrist.element)
    if (!grist) return
    grist.dataProvider.onRecordChange()
    grist.grist.data = { ...grist.dirtyData }
  }

  // 변경 사항이 있는 레코드의 경우, CUD를 분류해서 반환함
  assortDirties(grist, dirties) {
    dirties = dirties || grist.dirtyRecords
    var patches = this.buildPatches(dirties)
    var records = {
      original: dirties,
      patches,
      created: [],
      updated: [],
      deleted: []
    }
    patches.forEach(record => {
      switch (record['cuFlag']) {
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

  // 페이지네이션 정보를 가져옴
  getPageInfoFrom(grist, fetchedData) {
    var { page = 1, limit = 20, sorters = [] } = fetchedData || (grist && grist.dataProvider) || pagination(grist)

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

  // 레코드들을 서버 공통 resolver에 맞는 포맷으로 만듦
  buildPatches(patches) {
    return patches.map(patch => {
      let patchField = patch.id ? { id: patch.id } : {}
      const dirtyFields = patch.__dirtyfields__
      for (let key in dirtyFields) {
        patchField[key] = dirtyFields[key].after
      }
      patchField.cuFlag = patch.__dirty__

      return patchField
    })
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

    var drawValue = width - (width * Math.max(Math.min(this.animValue, 100), 0)) / 100
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
