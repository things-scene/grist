import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'

import './record-view-body'

export class RecordView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      record-view-body {
        flex: 1;
      }

      [footer] {
        display: flex;
        text-align: right;
        background-color: var(--record-view-footer-background);
        box-shadow: var(--context-toolbar-shadow-line);
        height: var(--record-view-footer-height);
      }

      [footer] button {
        flex: 1;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-width: 0 0 0 1px;
        height: var(--record-view-footer-button-height);
        color: var(--record-view-footer-button-color);
        font-size: 17px;
        line-height: 3;
      }

      [footer] button * {
        vertical-align: middle;
      }

      [footer] button mwc-icon {
        margin-top: -3px;
        margin-right: 5px;
        font-size: var(--record-view-footer-iconbutton-size);
      }

      [footer] button[ok] {
        background-color: var(--record-view-footer-focus-background);
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
    return html`
      <record-view-body .columns=${this.columns} .record=${this.record} .rowIndex=${this.rowIndex}> </record-view-body>
      <div footer>
        <button @click=${this.onReset.bind(this)}><mwc-icon>refresh</mwc-icon>Reset</button>
        <button @click=${this.onCancel.bind(this)}><mwc-icon>clear</mwc-icon>Cancel</button>
        <button @click=${this.onOK.bind(this)} ok><mwc-icon>radio_button_unchecked</mwc-icon>OK</button>
      </div>
    `
  }

  onReset() {
    this.dispatchEvent(
      new CustomEvent('reset', {
        detail: this.record
      })
    )
  }

  onCancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {
        detail: this.record
      })
    )
  }

  onOK() {
    this.dispatchEvent(
      new CustomEvent('ok', {
        detail: this.record
      })
    )
  }
}

customElements.whenDefined('record-view', RecordView)
