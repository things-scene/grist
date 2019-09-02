/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'string',
      label: 'mode',
      name: 'mode'
    },
    {
      type: 'textarea',
      label: 'config',
      name: 'config'
    }
  ]
}

import { Component, HTMLOverlayElement, error } from '@hatiolab/things-scene'

import '@things-factory/grist-ui'

export default class Grist extends HTMLOverlayElement {
  static get nature() {
    return NATURE
  }

  oncreate_element(grist) {
    this.data = {
      total: 100,
      records: Array(100)
        .fill()
        .map((item, idx) => {
          return {
            id: idx,
            name: idx % 2 ? `shnam-${idx + 1}` : `heartyoh-${idx + 1}`,
            description:
              idx % 2
                ? `hatiolab manager-${idx + 1}`
                : `hatiosea manager-${idx + 1}`,
            active: Math.round(Math.random() * 2) % 2 ? true : false,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        })
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

    grist.mode = mode

    grist.config = this.config
    grist.data =
      this.data instanceof Array
        ? {
            total: this.data.length,
            records: this.data
          }
        : this.data
  }

  /*
   * 컴포넌트가 ready 상태가 되거나, 컴포넌트의 속성이 변화될 시 setElementProperties 뒤에 호출된다.
   * 변화에 따른 기본적인 html 속성이 super.reposition()에서 진행되고, 그 밖의 작업이 필요할 때, 오버라이드 한다.
   */
  reposition() {
    super.reposition()
  }

  get config() {
    var { config, data } = this.state

    if (typeof config !== 'object') {
      try {
        eval(`config = ${config}`)
      } catch (e) {
        scene.error(e)
      }
    }

    return config
  }

  get tagName() {
    return 'data-grist'
  }
}

Component.register('grist', Grist)
