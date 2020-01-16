import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'
import './record-partial'

import { dataListClickHandler } from './event-handlers/data-list-click-handler'
import { dataListDblclickHandler } from './event-handlers/data-list-dblclick-handler'

class DataList extends LitElement {
  static get properties() {
    return {
      config: Object,
      data: Object,
      _records: Array,
      isTop: Boolean
    }
  }

  static get styles() {
    return [
      css`
        :host {
          background-color: var(--data-list-background-color);
          overflow-y: auto;
        }

        :nth-child(even) {
          background-color: #fff;
        }

        [selected-row] {
          background-color: var(--data-list-selected-background-color);
        }

        #upward {
          --mdc-icon-size: 26px;
          position: absolute;
          top: var(--data-list-fab-position-vertical);
          right: var(--data-list-fab-position-horizontal);
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          color: var(--data-list-fab-color);
          box-shadow: var(--data-list-fab-shadow);
          padding: 7px;
        }
      `
    ]
  }

  firstUpdated(changes) {
    this.isTop = true

    /* infinite scrolling */
    this.addEventListener('scroll', e => {
      const totalScrollHeight = this.scrollHeight
      const screenHeight = this.offsetHeight
      const currentScrollTop = this.scrollTop

      if (totalScrollHeight <= screenHeight + currentScrollTop + 1) {
        /* 마지막 페이지까지 계속 페이지를 증가시킨다. */
        var lastPage = Math.ceil(this._total / this._limit)

        if (this._page < lastPage) {
          this.dispatchEvent(new CustomEvent('attach-page', { bubbles: true, composed: true }))
        }
      }

      this.isTop = this.scrollTop == 0
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

    this.shadowRoot.addEventListener('click', dataListClickHandler.bind(this))
    this.shadowRoot.addEventListener('dblclick', dataListDblclickHandler.bind(this))
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
    if (changes.has('config')) {
      this._records = []
      this._page = 1
    }

    if (changes.has('data')) {
      this._records = this.data.records
      this._total = this.data.total
      this._limit = this.data.limit
      this._page = this.data.page
    }
  }

  render() {
    var records = this._records || []

    if (this.config && this.config.rows.appendable) {
      records = [...records, { __dirty__: '+' }]
    }

    return html`
      ${records.map(
        (record, rowIndex) => html`
          <record-partial
            .config=${this.config}
            .data=${this.data}
            .record=${record}
            .rowIndex=${rowIndex}
            ?selected-row=${record['__selected__']}
            ?dirty=${record['__dirty__']}
          ></record-partial>
        `
      )}
      ${this.isTop
        ? html``
        : html`
            <mwc-icon id="upward" @click=${e => this.gotoTop(e)}>arrow_upward</mwc-icon>
          `}
    `
  }

  gotoTop(e) {
    this.scrollTop = 0

    e.stopPropagation()
  }
}

customElements.whenDefined('data-list', DataList)
