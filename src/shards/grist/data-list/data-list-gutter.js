import { LitElement, html, css } from 'lit-element'

const DEFAULT_TEXT_ALIGN = 'left'

class DataListGutter extends LitElement {
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
          justify-content: var(--data-list-gutter-justify-content, flex-start);
          position: relative;

          white-space: nowrap;
          overflow: hidden;
          background-color: transparent;

          font-size: var(--grid-record-wide-fontsize);
          text-overflow: ellipsis;
        }

        * {
          flex: 1;
          margin: 0;
        }

        *[center] {
          flex: none;
          margin: 0 auto;
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
    var { renderer } = column.record

    /* renderer가 html template이 아니고 단순한 값인 경우가 있으므로, html 템플릿으로 감싸준다. */
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
        this.style.setProperty('--data-list-gutter-justify-content', justify)
      }
    }
  }
}

customElements.whenDefined('data-list-gutter', DataListGutter)
