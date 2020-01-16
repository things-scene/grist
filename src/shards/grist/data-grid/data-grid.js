import { LitElement, html, css } from 'lit-element'
import { ScrollbarStyles } from '../../scrollbar-styles'

import './data-grid-header'
import './data-grid-body'
import './data-grid-footer'

/**
 * DataGrid
 */
class DataGrid extends LitElement {
  static get properties() {
    return {
      config: Object,
      data: Object
    }
  }

  static get styles() {
    return [
      ScrollbarStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;

          overflow: hidden;

          border: 1px solid var(--grid-header-border-color);
          border-radius: 4px;
        }

        data-grid-body {
          flex: 1;
        }

        @media print {
          :host {
            zoom: 80%;
          }
        }
      `
    ]
  }

  get body() {
    return this.shadowRoot.querySelector('data-grid-body')
  }

  get header() {
    return this.shadowRoot.querySelector('data-grid-header')
  }

  firstUpdated() {
    /* header and body scroll synchronization */
    this.header.addEventListener('scroll', e => {
      if (this.body.scrollLeft !== this.header.scrollLeft) {
        this.body.scrollLeft = this.header.scrollLeft
      }
    })

    this.body.addEventListener('scroll', e => {
      if (this.body.scrollLeft !== this.header.scrollLeft) {
        this.header.scrollLeft = this.body.scrollLeft
      }
    })

    /* record selection processing */
    this.addEventListener('select-all-change', e => {
      var { selected } = e.detail
      var { records } = this.data

      records.forEach(record => (record['__selected__'] = selected))
      this.data = { ...this.data }
    })

    this.addEventListener('select-record-change', e => {
      var { records: selectedRecords, added = [], removed = [] } = e.detail
      var { records } = this.data
      var { selectable = false } = this.config.rows

      if (!records || !selectable) {
        return
      } else if (selectable && !selectable.multiple) {
        records.forEach(record => (record['__selected__'] = false))
      }

      if (selectedRecords) {
        records.forEach(record => (record['__selected__'] = false))
        selectedRecords.forEach(record => (record['__selected__'] = true))
      } else {
        removed.forEach(record => (record['__selected__'] = false))
        added.forEach(record => (record['__selected__'] = true))
      }

      this.requestUpdate()
    })

    /* field change processing */
    this.addEventListener('field-change', e => {
      var { after, before, column, record, row } = e.detail

      /* compare changes */
      if (after === before) {
        return
      }

      var validation = column.validation
      if (validation && typeof (validation == 'function')) {
        if (!validation.call(this, after, before, record, column)) {
          return
        }
      }

      this.onRecordChanged({ [column.name]: after }, row, column)
    })

    /* record reset processing */
    this.addEventListener('record-reset', e => {
      var { record, row } = e.detail

      this.onRecordChanged(record['__origin__'], row, null)
    })
  }

  onRecordChanged(recordData, row, column /* TODO column should be removed */) {
    // TODO 오브젝트나 배열 타입인 경우 deepCompare 후에 변경 적용 여부를 결정한다.

    /* 빈 그리드로 시작한 경우, data 설정이 되어있지 않을 수 있다. */
    var records = this.data.records || []

    var beforeRecord = records[row]
    var afterRecord
    var wantToDelete = false
    var wantToAppend = false

    if (!recordData) {
      if (!beforeRecord) {
        /* recordData가 없고, beforeRecord도 없다면, 레코드 생성 중에 리셋된 경우이므로 아무것도 하지 않는다. */
        this.requestUpdate()
        return
      } else {
        /*
         * beforeRecord가 있는데, 빈데이타로 업데이트하고자 한다면,
         * 삭제하고자 하는 의도로 이해된다. (주의 필요)
         */
        if (beforeRecord['__dirty__'] == '+') {
          wantToDelete = true
        } else {
          afterRecord = {
            ...beforeRecord,
            __dirty__: '-'
          }
        }
      }
    } else {
      if (!beforeRecord) {
        /* 기존 레코드가 없는 경우에는 새로운 레코드가 생성된다 */
        afterRecord = {
          ...recordData,
          __dirty__: '+'
        }

        wantToAppend = true
      } else {
        let beforeDirty = beforeRecord['__dirty__']
        if (beforeDirty == '+') {
          /* 기존에 새로 생성된 레코드가 있었으며 계속 수정중이다. */
          afterRecord = {
            ...beforeRecord,
            ...recordData,
            __dirty__: '+'
          }
        } else {
          /* 기존에 레코드가 있었으며 계속 수정중이다. */
          afterRecord = {
            ...beforeRecord,
            ...recordData,
            __dirty__: 'M'
          }
        }
      }
    }

    if (wantToAppend) {
      records.push(afterRecord)
    } else if (wantToDelete) {
      records.splice(row, 1)
    } else {
      records.splice(row, 1, afterRecord)
    }

    this.dispatchEvent(
      new CustomEvent('record-change', {
        bubbles: true,
        composed: true,
        detail: {
          before: beforeRecord,
          after: afterRecord,
          column,
          row
        }
      })
    )
  }

  updated(changes) {
    if (changes.has('config') || changes.has('data')) {
      /*
       * 데이타 내용에 따라 동적으로 컬럼의 폭이 달라지는 경우(예를 들면, sequence field)가 있으므로,
       * data의 변동에 대해서도 다시 계산되어야 한다.
       */
      this.calculateWidths(this.config && this.config.columns)
    }
  }

  calculateWidths(columns) {
    /*
     * 컬럼 모델 마지막에 'auto' cell을 추가하여, 자투리 영역을 꽉 채워서 표시한다.
     */
    this._widths = (columns || [])
      .filter(column => !column.hidden)
      .map(column => {
        switch (typeof column.width) {
          case 'number':
            return column.width + 'px'
          case 'string':
            return column.width
          case 'function':
            return column.width.call(this, column)
          default:
            return 'auto'
        }
      })
      .concat(['auto'])
      .join(' ')

    this.style.setProperty('--grid-template-columns', this._widths)
    this.style.setProperty('--grid-template-print-columns', this._widths.replace(/px/gi, 'fr'))
  }

  render() {
    var { pagination = {}, columns = [] } = this.config || {}

    var paginatable = !pagination.infinite
    var data = this.data

    return html`
      <data-grid-header
        .config=${this.config}
        .columns=${columns}
        .data=${data}
        @column-width-change=${e => {
          let { idx, width } = e.detail
          columns[idx].width = width
          this.calculateWidths(columns)
        }}
      ></data-grid-header>

      <data-grid-body .config=${this.config} .columns=${columns} .data=${data}></data-grid-body>

      ${paginatable
        ? html`
            <data-grid-footer .config=${this.config} .data=${data}></data-grid-footer>
          `
        : html``}
    `
  }

  focus() {
    super.focus()

    var body = this.shadowRoot.querySelector('data-grid-body')
    body && body.focus()
  }
}

customElements.whenDefined("data-grid", DataGrid);
