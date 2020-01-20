/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'select',
      label: 'grist-mode',
      name: 'mode',
      property: {
        options: [
          {
            display: 'Grid',
            value: 'GRID'
          },
          {
            display: 'List',
            value: 'LIST'
          },
          {
            display: 'Depends on device',
            value: 'DEVICE'
          }
        ]
      }
    },
    {
      type: 'textarea',
      label: 'config',
      name: 'config'
    }
  ]
}

import { isMobileDevice } from '@things-factory/utils'
import { Component, HTMLOverlayElement, error } from '@hatiolab/things-scene'

import '@things-factory/grist-ui'

export default class Grist extends HTMLOverlayElement {
  constructor(...args) {
    super(...args)
    this.__data = {}
    this.beforeFetchFuncs = {}
  }
  static get nature() {
    return NATURE
  }

  oncreate_element(grist) {
    grist.fetchHandler = ({ page, limit, sorters, options }) => {
      Object.values(this.beforeFetchFuncs).forEach(func => func({ page, limit, sorters, options }))
      var { total = 0, records = [] } = grist.data || {}
      return {
        page,
        limit,
        total,
        records
      }
    }
  }

  get data() {
    return this.__data
  }

  set data(data) {
    this.__data = data
    if (!typeof data == 'object') return
    var { page, limit } = this.config.pagination || {}
    this.element.data =
      data instanceof Array
        ? {
            page,
            limit,
            ...this.element._data,
            total: data.length,
            records: Array.from(data)
          }
        : {
            page,
            limit,
            ...this.element._data,
            ...data
          }
  }

  dispose() {
    super.dispose()
  }

  /*
   * 컴포넌트의 생성 또는 속성 변화 시에 호출되며,
   * 그에 따른 html element의 반영이 필요한 부분을 구현한다.
   *
   * ThingsComponent state => HTML element properties
   */
  setElementProperties(grist) {
    var { mode } = this.state
    if (mode != 'DEVICE') grist.mode = mode
    else {
      grist.mode = isMobileDevice() ? 'LIST' : 'GRID'
    }
    grist.config = this.config
  }

  /*
   * 컴포넌트가 ready 상태가 되거나, 컴포넌트의 속성이 변화될 시 setElementProperties 뒤에 호출된다.
   * 변화에 따른 기본적인 html 속성이 super.reposition()에서 진행되고, 그 밖의 작업이 필요할 때, 오버라이드 한다.
   */
  reposition() {
    super.reposition()
  }

  get config() {
    var { config } = this.state

    if (typeof config !== 'object') {
      try {
        config = eval(`(${config})`)
      } catch (e) {
        scene.error(e)
      }
    }
    if (config.pagination && !config.pagination.limit && config.pagination.pages && config.pagination.pages.length)
      config.pagination.limit = config.pagination.pages[0]
    return config
  }

  get tagName() {
    return 'data-grist'
  }
}

Component.register('grist', Grist)
