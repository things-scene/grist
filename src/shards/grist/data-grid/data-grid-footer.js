import { LitElement, html, css } from 'lit-element'

import '@material/mwc-icon'

const DEFAULT_PAGES = [20, 30, 50, 100]
const DEFAULT_LIMIT = 30

class DataGridFooter extends LitElement {
  static get properties() {
    return {
      config: Object,
      data: Object
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: row;
          overflow: hidden;

          padding: var(--grid-footer-padding);
          background-color: var(--grid-footer-background-color);
          font-size: var(--grid-footer-font-size);
        }

        :host * {
          white-space: nowrap;
          overflow: hidden;
          padding: 0 2px;

          text-overflow: ellipsis;
          text-align: center;
          color: var(--grid-footer-color);
        }

        .filler {
          flex: 1;
        }

        mwc-icon {
          font-size: 1.5em;
          vertical-align: middle;
        }

        .limit a {
          color: var(--grid-footer-limit-color);
        }

        .limit a[selected] {
          color: var(--grid-footer-color);
          font-weight: bold;
          text-decoration: underline;
        }

        a[inactive] * {
          color: var(--grid-footer-inactive-color);
        }
      `
    ]
  }

  _gotoPage(page) {
    var { limit = 20, total = 0 } = this.data || {}

    if (page > Math.ceil(total / limit) || page <= 0) {
      return
    }
    this.dispatchEvent(new CustomEvent('page-change', { bubbles: true, composed: true, detail: page }))
  }

  _changeLimit(limit) {
    this.dispatchEvent(new CustomEvent('limit-change', { bubbles: true, composed: true, detail: limit }))
  }

  render() {
    var { records = [], page = 1, limit = DEFAULT_LIMIT, total = 0 } = this.data || {}
    var { pages = DEFAULT_PAGES } = (this.config && this.config.pagination) || {}

    var begin = records.length == 0 ? 0 : limit * (page - 1) + 1
    var end = records.length == 0 ? 0 : begin + records.length - 1
    var totalPage = Math.max(1, Math.ceil(total / limit))

    return html`
      <a ?inactive=${page <= 1} @click=${e => this._gotoPage(1)}><mwc-icon>skip_previous</mwc-icon></a>
      <a ?inactive=${page <= 1} @click=${e => this._gotoPage(page - 1)}><mwc-icon>navigate_before</mwc-icon></a>
      <span>page ${page}&nbsp;/&nbsp;${totalPage}</span>
      <a ?inactive=${page >= totalPage} @click=${e => this._gotoPage(page + 1)}><mwc-icon>navigate_next</mwc-icon></a>
      <a ?inactive=${page >= totalPage} @click=${e => this._gotoPage(totalPage)}><mwc-icon>skip_next</mwc-icon></a>

      <span class="filler"></span>

      <span class="limit">
        ${pages.map(
          size => html`
            <a ?selected=${limit == size} @click=${e => this._changeLimit(size)}>${size}</a>
          `
        )}
        records
      </span>
      <span>&nbsp;</span>
      <span>${begin} - ${end}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>total ${total || 0} records.</span>
    `
  }
}

customElements.whenDefined("data-grid-footer", DataGridFooter);
