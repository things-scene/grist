import { LitElement, html, css } from 'lit-element'

const DEFAULT_TEXT_ALIGN = 'left'

class DataGridField extends LitElement {
  static get properties() {
    return {
      align: { attribute: true },
      record: Object,
      column: Object,
      rowIndex: Number,
      editing: { attribute: 'editing' },
      value: Object
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: center;
          justify-content: var(--data-grid-field-justify-content, flex-start);
          position: relative;

          white-space: nowrap;
          overflow: hidden;
          background-color: var(--grid-record-background-color, white);
          padding: 7px 0px;
          border: 1px solid transparent;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);

          font-size: var(--grid-record-wide-fontsize);
          text-overflow: ellipsis;

          min-height: 19px;
        }

        :host([gutter]) * {
          cursor: default;
        }

        :host([editing]) {
          padding: 0;
        }

        :host([dirty])::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;

          width: 0px;
          height: 0px;
          border-top: 5px solid red;
          border-left: 5px solid transparent;
        }

        * {
          flex: 1;
          margin: 0;
          text-align: var(--data-grid-field-text-align);
        }

        *[center] {
          flex: none;
          margin: 0 auto;
        }

        input[type='checkbox'],
        input[type='radio'] {
          zoom: var(--grist-input-zoom);
        }
      `
    ]
  }

  get isEditing() {
    return this.hasAttribute('editing')
  }

  render() {
    if (!this.column) {
      return html``
    }

    var { value, column, record, rowIndex } = this
    var { renderer, editor } = column.record

    return html`
      ${this.isEditing
        ? editor(value, column, record, rowIndex, this)
        : renderer(value, column, record, rowIndex, this)}
    `
  }

  updated(changes) {
    if (changes.has('editing')) {
      if (this.isEditing) {
        this._onKeydownInEditingMode = (e => {
          if (e.keyCode == 27 /* KEY_ESC */) {
            /* 편집 취소 */
            this._editCancelled = true
          }
        }).bind(this)

        this._onFieldChange = (e => {
          this._editCancelled && e.stopPropagation()
        }).bind(this)

        delete this._editCancelled
        this.addEventListener('field-change', this._onFieldChange)
        this.addEventListener('keydown', this._onKeydownInEditingMode)
      } else {
        this.removeEventListener('field-change', this._onFieldChange)
        this.removeEventListener('keydown', this._onKeydownInEditingMode)
      }
    }

    if (changes.has('column')) {
      var align = (this.column.record && this.column.record.align) || DEFAULT_TEXT_ALIGN
      if (align != DEFAULT_TEXT_ALIGN) {
        let justify = 'center'
        switch (align) {
          case 'right':
            justify = 'flex-end'
            break
        }
        this.style.setProperty('--data-grid-field-justify-content', justify)
        this.style.setProperty('--data-grid-field-text-align', align)
      }
    }
  }
}

customElements.whenDefined('data-grid-field', DataGridField)
