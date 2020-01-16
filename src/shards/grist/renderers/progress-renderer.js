import { LitElement, html, css } from 'lit-element'

class DataGristProgressRenderer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }

      #border {
        display: block;
        position: absolute;

        height: 100%;
        width: 100%;
        box-sizing: border-box;

        border: var(--grist-input-progress-border);
        background-color: var(--grist-input-progress-background);
      }

      #bar {
        background-color: var(--grist-input-progress-bar-background);
        text-align: left;
        color: var(--grist-input-progress-bar-color);
      }
    `
  }

  static get properties() {
    return {
      value: Number,
      min: Number,
      max: Number
    }
  }

  render() {
    var { value, min, max } = this
    var progress = isNaN(Number(value)) ? 0 : Math.min(100, Math.max(0, ((Number(value) - min) * 100) / (max - min)))

    return html`
      <div id="border"></div>
      <div id="bar" style="width:${progress}%">
        &nbsp;${progress}
      </div>
    `
  }
}

customElements.whenDefined('data-grist-progress-renderer', DataGristProgressRenderer)

export const ProgressRenderer = (value, column, record, rowIndex, field) => {
  var { min = 0, max = 100 } = column.record.options || {}

  return html`
    <data-grist-progress-renderer
      .value=${Number(value)}
      .min=${Number(min)}
      .max=${Number(max)}
    ></data-grist-progress-renderer>
  `
}
