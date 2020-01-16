import { LitElement, html, css } from 'lit-element'

const DEFAULT_TEXT_ALIGN = 'left'

class DataListField extends LitElement {
  static get properties() {
    return {
      align: { attribute: true },
      record: Object,
      column: Object,
      rowIndex: Number,
      value: Object
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;

          white-space: normal;
          overflow: hidden;
          padding: 1px 7px 1px 0;

          font: inherit;
        }

        * {
          flex: 1;
          margin: 0;
          text-align: left;
        }

        *[center] {
          flex: none;
          margin: 0 auto;
        }

        input[type='checkbox'],
        input[type='radio'] {
          zoom: var(--grist-input-zoom);
        }

        @media only screen and (max-width: 460px) {
          *[center] {
            margin: initial;
          }
        }
      `
    ]
  }

  render() {
    var { value, column, record, rowIndex } = this
    var { renderer } = column.record

    return html`
      ${renderer(value, column, record, rowIndex, this)}
    `
  }
}

customElements.whenDefined("data-list-field", DataListField);
