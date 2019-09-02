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
            display: 'Commit',
            value: 'commit'
          },
          {
            display: 'Get selected rows',
            value: 'getSelectedRows'
          },
          {
            display: 'Get dirty rows',
            value: 'getDirtyRows'
          }
        ]
      }
    },
    {
      type: 'string',
      label: 'value',
      name: 'value'
    }
  ]
}

export const ACTIONS = {
  COMMIT: 'commit',
  GET_SELECTED: 'getSelectedRows',
  GET_DIRTY: 'getDirtyRows'
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
    if('value' in after) this.doAction()
  }

  doAction() {
    var { action } = this.state
    var { element: grist } = this.targetGrist || {}
    if (!grist) return

    switch (action) {
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
