import { LitElement, html, css } from 'lit-element'

const DEFAULT_TEXT_ALIGN = 'left'

class DataReportField extends LitElement {
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
          justify-content: var(--data-report-field-justify-content, flex-start);
          position: relative;

          white-space: nowrap;
          overflow: hidden;
          background-color: var(--report-record-background-color);
          padding: var(--report-record-field-padding);
          border: 1px solid transparent;
          border-bottom: var(--report-record-field-border-bottom);

          font-size: var(--report-record-wide-fontsize);
          text-overflow: ellipsis;

          min-height: 19px;
        }

        :host([gutter]) * {
          cursor: default;
        }

        * {
          flex: 1;
          margin: 0;
          text-align: var(--data-report-field-text-align);
        }

        *[center] {
          flex: none;
          margin: 0 auto;
        }
      `
    ]
  }

  render() {
    if (!this.column) {
      return html``
    }

    var { value, column, record, rowIndex } = this
    var { renderer } = column.record

    return html`
      ${renderer(value, column, record, rowIndex, this)}
    `
  }

  updated(changes) {
    if (changes.has('column')) {
      var align = (this.column.record && this.column.record.align) || DEFAULT_TEXT_ALIGN
      if (align != DEFAULT_TEXT_ALIGN) {
        let justify = 'center'
        switch (align) {
          case 'right':
            justify = 'flex-end'
            break
        }
        this.style.setProperty('--data-report-field-justify-content', justify)
        this.style.setProperty('--data-report-field-text-align', align)
      }
    }
  }
}

customElements.whenDefined('data-report-field', DataReportField)
