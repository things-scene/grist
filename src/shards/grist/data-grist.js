import { LitElement, html, css } from 'lit-element'

import { buildConfig } from './configure/config-builder'

import './data-grid/data-grid'
import './data-list/data-list'

import { DataProvider } from './data-provider'

import { pulltorefresh } from '../pull-to-refresh'

const DEFAULT_DATA = {
  page: 1,
  limit: 20,
  total: 1,
  records: []
}

export class DataGrist extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background-color: var(--grist-background-color);
          padding: var(--grist-padding);
          min-height: 120px;

          overflow: hidden;

          /* for pulltorefresh controller */
          position: relative;
        }

        data-grid,
        data-list {
          flex: 1;
        }

        data-list {
          overflow-y: auto;
        }

        oops-spinner {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        oops-spinner[show] {
          display: block;
        }

        oops-note {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      `
    ]
  }

  static get properties() {
    return {
      mode: String,
      config: Object,
      data: Object,
      selectedRecords: Array,
      fetchHandler: Object,
      fetchOptions: Object,
      editHandler: Object,
      _data: Object,
      _config: Object,
      _showSpinner: Boolean
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.dataProvider = new DataProvider(this)
  }

  disconnectedCallback() {
    super.disconnectedCallback()

    this.dataProvider.dispose()
  }

  firstUpdated() {
    if (this.fetchHandler) {
      /* TODO 그리드 초기에는 fetchHandler가 설정되지 않았다가, 나중에 설정되는 경우에 대한 대응 */
      pulltorefresh({
        container: this.shadowRoot,
        scrollable: this.grist,
        refresh: () => {
          return this.fetch(true)
        }
      })
    }
  }

  render() {
    var oops = !this._showSpinner && (!this._data || !this._data.records || this._data.records.length == 0)

    return html`
      ${oops
        ? html`
            <oops-note icon="list" title="EMPTY LIST" description="There are no records to be shown"></oops-note>
          `
        : html``}
      ${this.mode == 'GRID'
        ? html`
            <data-grid id="grist" .config=${this._config} .data=${this._data}> </data-grid>
          `
        : html`
            <data-list id="grist" .config=${this._config} .data=${this._data}> </data-list>
          `}
      <oops-spinner ?show=${this._showSpinner}></oops-spinner>
    `
  }

  async fetch(reset = true) {
    if (!this._config) {
      /* avoid to be here */
      console.warn('grist is not configured yet.')
      return
    }

    if (reset) {
      /*
       * scroll 의 현재위치에 의해서 scroll 이벤트가 발생할 수 있으므로, 이를 방지하기 위해서 스크롤의 위치를 TOP으로 옮긴다.
       * (scroll 이 첫페이지 크기 이상으로 내려가 있는 경우, 첫페이지부터 다시 표시하는 경우에, scroll 이벤트가 발생한다.)
       */
      this.grist.scrollTop = 0
    }

    if (this.dataProvider) {
      let { limit: initLimit, page: initPage, infinite } = this._config.pagination
      let { limit = initLimit || DEFAULT_DATA.limit, page = initPage || DEFAULT_DATA.page } = this.dataProvider
      let { sorters } = this._config

      if (infinite || this.mode !== 'GRID') {
        await this.dataProvider.attach(reset)
      } else {
        await this.dataProvider.fetch({
          limit,
          page,
          sorters
        })
      }
    }
  }

  updated(changes) {
    if (changes.has('config')) {
      this._config = buildConfig({
        ...this.config
      })

      this.dataProvider.sorters = this._config.sorters
      this.fetch()
    }

    if (changes.has('fetchHandler')) {
      this.dataProvider.fetchHandler = this.fetchHandler
    }

    if (changes.has('editHandler')) {
      this.dataProvider.editHandler = this.editHandler
    }

    if (changes.has('fetchOptions')) {
      this.dataProvider.fetchOptions = this.fetchOptions
    }

    if (changes.has('data')) {
      this.reset()
    }

    if (changes.has('selectedRecords')) {
      var { records } = this.data || []
      var selectedRecords = this.selectedRecords || []

      var _records = this._data.records

      /* 원본데이타에서 index를 찾아서, 복사본 데이타의 selected를 설정한다. */
      selectedRecords.forEach(selected => {
        var index = records.indexOf(selected)
        var record = _records[index]
        if (record) {
          record['__selected__'] = true
        }
      })

      /* update _data property intentionally */
      this.refresh()
    }
  }

  get grist() {
    return this.shadowRoot.querySelector('#grist')
  }

  get dirtyData() {
    return this.grist.data || {}
  }

  get dirtyRecords() {
    var { records = [] } = this.dirtyData
    return records.filter(record => record['__dirty__'])
  }

  exportPatchList({ flagName = 'patchFlag', addedFlag = '+', deletedFlag = '-', modifiedFlag = 'M', idField = 'id' }) {
    let dirtyRecords = this.dirtyRecords
    if (!dirtyRecords || dirtyRecords.length == 0) {
      return []
    }

    return dirtyRecords.map(record => {
      let flag = record.__dirty__

      let patch = {
        [flagName]: flag == 'M' ? modifiedFlag : flag == '+' ? addedFlag : deletedFlag
      }

      if (idField in record && record[idField]) {
        patch[idField] = record[idField]
      }

      for (let key in record.__dirtyfields__) {
        patch[key] = record[key]
      }
      return patch
    })
  }

  exportRecords({ ifSelectedOnly = true, includeHiddenField = true } = {}) {
    let records = ifSelectedOnly ? this.selected : this.data.records

    if (ifSelectedOnly && (!records || records.length == 0)) {
      records = this.data.records
    }

    let columns = this._config.columns.filter(column => column.type !== 'gutter')
    if (!includeHiddenField) {
      columns = columns.filter(column => !column.hidden)
    }
    let columnNames = columns.map(column => column.name)

    return records.map(item => {
      return columnNames.reduce((record, name) => {
        record[name] = item[name]
        return record
      }, {})
    })
  }

  get selected() {
    var { records = [] } = this.grist.data || {}
    return records.filter(record => record['__selected__'])
  }

  showSpinner() {
    this._showSpinner = true
  }

  hideSpinner() {
    this._showSpinner = false
  }

  focus() {
    super.focus()

    this.grist.focus()
  }

  commit() {
    var { page, total, limit, records } = this.grist.data

    this.data = {
      page,
      total,
      limit,
      records: records.map(record => {
        var copied = {
          ...record
        }

        delete copied.__seq__
        delete copied.__dirty__
        delete copied.__selected__
        delete copied.__changes__
        delete copied.__dirtyfields__
        delete copied.__origin__

        return copied
      })
    }
  }

  refresh() {
    /* FIXME - this.requestUpdate()로 대체 */
    /* update _data property intentionally */
    this._data = {
      ...this._data
    }
  }

  reset() {
    var { limit = DEFAULT_DATA.limit, page = DEFAULT_DATA.page, total = DEFAULT_DATA.total, records = [] } = this.data

    /* 원본 데이타를 남기고, 복사본(_data)을 사용한다. */
    records = records.map((record, idx) => {
      return {
        ...record,
        __seq__: this.mode == 'GRID' ? (page - 1) * limit + idx + 1 : idx + 1,
        __origin__: record
      }
    })

    this._data = {
      limit,
      page,
      total,
      records
    }
  }
}

customElements.whenDefined("data-grist", DataGrist);
