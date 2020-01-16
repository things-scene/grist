import { LitElement, html, css } from 'lit-element'
import { openPopup } from '../../layout'
import '@material/mwc-icon'

import { recordPartialClickHandler } from './event-handlers/record-partial-click-handler'
import { recordPartialDblClickHandler } from './event-handlers/record-partial-dblclick-handler'
// import { recordPartialLongPressHandler } from './event-handlers/record-partial-long-press-handler'

import './data-list-gutter'
import './data-list-field'
import '../record-view'

// TODO 로케일 설정에 따라서 포맷이 바뀌도록 해야한다.
const OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
  // timeZone: 'America/Los_Angeles'
}

const formatter = new Intl.DateTimeFormat(navigator.language, OPTIONS)

export class RecordPartial extends LitElement {
  static get properties() {
    return {
      config: Object,
      data: Object,
      record: Object,
      rowIndex: Number,
      selectedRow: {
        /*
         * row-selector를 사용자가 변경할 때, record-partial의 update를 유도하기 위해 selected-row attribute를 property에 추가함.
         * (이를 해주지 않으면, 리스트 refresh 경우에 selected-row checkbox가 클리어되지 않는 현상이 발생함.)
         */
        attribute: 'selected-row'
      }
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: var(--data-list-item-border-bottom);
          position: relative;
          min-height: 42px;
        }

        data-list-gutter {
          flex: 0 0 14px;
        }

        :host([dirty])::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;

          width: 0px;
          height: 0px;
          border-top: var(--grid-record-dirty-border-top);
          border-right: var(--grid-record-dirty-border-left);
        }

        :host > * {
          margin: var(--data-list-item-margin);
          zoom: 1.4;
        }

        :host [dirty] {
          position: absolute;
          margin: 0;
          height: 20px;
          font: var(--grid-record-dirty-icon-font);
          text-indent: 1px;
          left: 0;
          top: 0;
          color: #fff;
        }

        [content] {
          flex: auto;
          display: block;
          zoom: 1;
        }

        data-list-field {
          padding-top: 3px;
          font: var(--data-list-item-etc-font);
          color: var(--data-list-item-etc-color);
        }

        data-list-field[name] {
          font: var(--data-list-item-name-font);
          color: var(--data-list-item-name-color);
        }

        data-list-field[desc] {
          font: var(--data-list-item-disc-font);
          color: var(--data-list-item-disc-color);
        }

        .update-info {
          font: var(--data-list-item-etc-font);
          color: var(--data-list-item-etc-color);
        }

        .update-info mwc-icon {
          vertical-align: middle;
          font-size: 1em;
        }
      `
    ]
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval)
  }

  onFieldChange(e) {
    /* record-view의 이벤트를 부모에게로 전달한다. */
    this.dispatchEvent(
      new CustomEvent('field-change', {
        bubbles: true,
        composed: true,
        detail: e.detail
      })
    )
  }

  get recordView() {
    if (!this._recordView) {
      this._recordView = document.createElement('record-view')
      this._recordView.addEventListener('field-change', e => this.onFieldChange(e))
    }

    var columns = this.config.columns

    this._recordView.columns = columns
    this._recordView.record = this.record
    this._recordView.rowIndex = this.rowIndex

    return this._recordView
  }

  firstUpdated() {
    /* 
      long-press 
      TODO. performance를 확인한 후에 활성화하자.
    */
    // longpressable(this.shadowRoot.querySelector('[content]'))

    // this.shadowRoot.addEventListener('long-press', recordPartialLongPressHandler.bind(this))
    this.shadowRoot.addEventListener('click', recordPartialClickHandler.bind(this))
    this.shadowRoot.addEventListener('dblclick', recordPartialDblClickHandler.bind(this))
  }

  updated(changes) {
    if (changes.has('record') && this._recordView) {
      this._recordView.record = this.record
    }
  }

  render() {
    var record = this.record || {}
    var rowIndex = this.rowIndex
    var { columns, list } = this.config
    var { fields } = list

    var displayColumns = fields.map(field => columns.find(column => column.name == field)).filter(column => column)
    var gutters = (columns || []).filter(column => column.type == 'gutter' && column.forList)

    if (this.hasAttribute('dirty')) {
      var dirtyIcon

      switch (this.record['__dirty__']) {
        case 'M':
          dirtyIcon = 'done'
          break
        case '+':
          dirtyIcon = 'add'
          break
        case '-':
          dirtyIcon = 'remove'
          break
      }
    }

    return html`
      ${dirtyIcon
        ? html`
            <mwc-icon dirty>${dirtyIcon}</mwc-icon>
          `
        : html``}
      ${gutters.map(
        gutter =>
          html`
            <data-list-gutter
              .rowIndex=${rowIndex}
              .column=${gutter}
              .record=${record}
              .value=${record[gutter.name]}
            ></data-list-gutter>
          `
      )}

      <div content>
        ${displayColumns.map(
          (column, idx) =>
            html`
              <data-list-field
                .rowIndex=${rowIndex}
                .column=${column}
                .record=${record}
                .value=${record[column.name]}
                ?name=${idx == 0}
                ?desc=${idx == 1}
              ></data-list-field>
            `
        )}
      </div>
    `
  }

  popupRecordView() {
    var titleField = this.config.list.fields[0] || 'name'
    var title = this.record[titleField]

    /* field가 오브젝트형인 경우에는 렌더러를 타이틀로 사용한다. */
    if (typeof title == 'object') {
      var column = this.config.columns.find(column => column.name == titleField)
      title = column.record.renderer(title, column, this.record, this.rowIndex, this /* cautious */)
    }

    var popup = openPopup(this.recordView, {
      backdrop: true,
      size: 'large',
      title
    })

    this.recordView.addEventListener('reset', () => {
      this.dispatchEvent(
        new CustomEvent('record-reset', {
          bubbles: true,
          composed: true,
          detail: {
            record: this.record,
            row: this.rowIndex
          }
        })
      )
    })

    this.recordView.addEventListener('cancel', () => {
      this.dispatchEvent(
        new CustomEvent('record-reset', {
          bubbles: true,
          composed: true,
          detail: {
            record: this.record,
            row: this.rowIndex
          }
        })
      )
      popup.close()
    })

    this.recordView.addEventListener('ok', () => {
      popup.close()
    })

    popup.onclosed = () => {
      delete this._recordView
    }
  }
}

customElements.whenDefined('record-partial', RecordPartial)
