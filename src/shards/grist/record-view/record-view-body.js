import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'

import '../data-grid/data-grid-field'

const KEY_ENTER = 13
const KEY_ESC = 27

export class RecordViewBody extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-auto-rows: min-content;
        grid-gap: 10px 0;
        background-color: var(--record-view-background-color);
        padding: 10px;

        overflow-y: auto;
      }

      label {
        position: relative;
        text-transform: capitalize;

        padding: var(--record-view-item-padding);
        border-bottom: var(--record-view-border-bottom);
        font: var(--record-view-label-font);
        color: var(--record-view-label-color);
      }

      label mwc-icon {
        display: none;
      }

      label[editable] mwc-icon {
        display: inline-block;
        margin-left: -2px;
        font-size: 12px;
        opacity: 0.5;
      }

      data-grid-field {
        padding: 0 0 5px 0;
        border-bottom: var(--record-view-border-bottom);
        font: var(--record-view-font);
        color: var(--record-view-color);
        background-color: transparent;
      }

      data-grid-field[editing='true'] {
        border-bottom: var(--record-view-edit-border-bottom);
      }

      :first-child + data-grid-field {
        color: var(--record-view-focus-color);
        font-weight: bold;
      }
    `
  }

  static get properties() {
    return {
      columns: Array,
      record: Object,
      rowIndex: Number
    }
  }

  render() {
    var columns = (this.columns || []).filter(column => !column.hidden && column.type != 'gutter')
    var record = this.record || {}
    var rowIndex = this.rowIndex

    return html`
      ${columns.map(column => {
        let { editable } = column.record
        let dirtyFields = record['__dirtyfields__'] || {}

        return html`
          <label ?editable=${editable}>${this._renderLabel(column)} <mwc-icon>edit</mwc-icon></label>
          <data-grid-field
            .rowIndex=${rowIndex}
            .column=${column}
            .record=${record}
            .value=${record[column.name]}
            ?dirty=${!!dirtyFields[column.name]}
          ></data-grid-field>
        `
      })}
    `
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('click', e => {
      e.stopPropagation()

      /* target should be 'data-grid-field' */
      var target = e.target

      if (this.editTarget) {
        this.editTarget.removeAttribute('editing')
        this.editTarget = null
      }

      if (target.tagName !== 'DATA-GRID-FIELD' || !target.column.record.editable) {
        return
      }

      this.editTarget = target
      target.setAttribute('editing', true)
    })

    this._focusedListener = function(e) {
      var keyCode = e.keyCode
      switch (keyCode) {
        case KEY_ESC:
        /* TODO 편집이 취소되어야 한다. */
        case KEY_ENTER:
          if (this.editTarget) {
            this.editTarget.removeAttribute('editing')
            this.editTarget = null
          }
          return

        default:
          return
      }
    }.bind(this)
    window.addEventListener('keydown', this._focusedListener)
  }

  disconnectedCallback() {
    super.disconnectedCallback()

    window.removeEventListener('keydown', this._focusedListener)
  }

  _renderLabel(column) {
    var { renderer } = column.header
    var title = renderer.call(this, column)

    return html`
      ${title}
    `
  }
}

customElements.whenDefined('record-view-body', RecordViewBody)
