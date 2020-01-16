import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'

class GutterDirtyElement extends LitElement {
  static get styles() {
    return css``
  }

  static get properties() {
    return {
      value: String
    }
  }

  render() {
    switch (this.value) {
      case '+':
        return html`
          <mwc-icon style=${INLINESTYLE} center>add</mwc-icon>
        `
      case '-':
        return html`
          <mwc-icon style=${INLINESTYLE} center>remove</mwc-icon>
        `
      case 'M':
        return html`
          <mwc-icon style=${INLINESTYLE} center>done</mwc-icon>
        `
      default:
        return ''
    }
  }
}

customElements.whenDefined('gutter-dirty-element', GutterDirtyElement)

const INLINESTYLE =
  'font-size: var(--grid-record-fontsize, 13px);vertical-align: middle; color: var(--grid-dirty-color, inherit)'

export class GutterDirty {
  static instance(config = {}) {
    return Object.assign(
      {},
      {
        type: 'gutter',
        name: '__dirty__',
        gutterType: 'dirty',
        width: 16,
        resizable: false,
        sortable: false,
        header: '',
        record: {
          renderer: function(value, column, record, rowIndex, field) {
            return value
              ? html`
                  <gutter-dirty-element value=${value}></gutter-dirty-element>
                `
              : html``
          },
          align: 'center'
        },
        forGrid: true,
        forList: false
      },
      config
    )
  }
}
