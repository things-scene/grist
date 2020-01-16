import { LitElement, html, css } from 'lit-element'
import { ScrollbarStyles } from '../../scrollbar-styles'

import './data-report-header'
import './data-report-body'

/**
 * DataReportComponent
 */
class DataReportComponent extends LitElement {
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

          border: 1px solid var(--report-header-border-color);
          border-radius: var(--report-component-border-radius);
        }

        data-report-body {
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
    return this.shadowRoot.querySelector('data-report-body')
  }

  get header() {
    return this.shadowRoot.querySelector('data-report-header')
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

    this.style.setProperty('--report-template-columns', this._widths)
    this.style.setProperty('--report-template-print-columns', this._widths.replace(/px/gi, 'fr'))
  }

  render() {
    var { columns = [] } = this.config || {}

    var data = this.data

    return html`
      <data-report-header
        .config=${this.config}
        .columns=${columns}
        .data=${data}
        @column-width-change=${e => {
          let { idx, width } = e.detail
          columns[idx].width = width
          this.calculateWidths(columns)
        }}
      ></data-report-header>

      <data-report-body .config=${this.config} .columns=${columns} .data=${data}></data-report-body>
    `
  }

  focus() {
    super.focus()

    var body = this.shadowRoot.querySelector('data-report-body')
    body && body.focus()
  }
}

customElements.whenDefined('data-report-component', DataReportComponent)
