import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'

function _calculateTotalPage(limit, total) {
  /*
   * total page는 1이상이어야 한다.
   * 즉, 레코드가 하나도 없어도, 페이지 갯수는 1이 되어야 한다.
   */
  return Math.max(1, Math.ceil(total / limit))
}

const NOOP = function() {}

export class DataProvider {
  constructor(grist) {
    this.grist = grist
    this._fetchHandler = null
    this._editHandler = null

    this._pageChangeHandler = this.onPageChange.bind(this)
    this._limitChangeHandler = this.onLimitChange.bind(this)
    this._sortersChangeHandler = this.onSortersChange.bind(this)
    this._recordChangeHandler = this.onRecordChange.bind(this)
    this._attachPageHandler = this.onAttachPage.bind(this)

    this.grist.addEventListener('attach-page', this._attachPageHandler)
    this.grist.addEventListener('page-change', this._pageChangeHandler)
    this.grist.addEventListener('limit-change', this._limitChangeHandler)
    this.grist.addEventListener('sorters-change', this._sortersChangeHandler)
    this.grist.addEventListener('record-change', this._recordChangeHandler)
  }

  dispose() {
    this.grist.removeEventListener('attach-page', this._attachPageHandler)
    this.grist.removeEventListener('page-change', this._pageChangeHandler)
    this.grist.removeEventListener('limit-change', this._limitChangeHandler)
    this.grist.removeEventListener('sorters-change', this._sortersChangeHandler)
    this.grist.removeEventListener('record-change', this._recordChangeHandler)
  }

  onAttachPage() {
    this.attach()
  }

  onPageChange(e) {
    var page = e.detail
    this.fetch({ page })
  }

  onLimitChange(e) {
    var limit = e.detail
    this.fetch({ limit })
  }

  onSortersChange(e) {
    this.sorters = e.detail
    this.fetch()
  }

  checkDirties() {
    var { records } = this.grist.dirtyData
    // var touches = records.filter(record => record['__dirty__'] == 'M')
    var { columns } = this.grist._config

    for (var record of records) {
      var origin = record['__origin__'] || {}

      var dirtyFields = (record['__dirtyfields__'] = columns
        .filter(column => column.type !== 'gutter' && !isEqual(origin[column.name], record[column.name]))
        .reduce((sum, column) => {
          var name = column.name

          sum[name] = {
            before: origin[name],
            after: record[name]
          }

          return sum
        }, {}))

      if (record['__dirty__'] == 'M' && isEmpty(dirtyFields)) {
        delete record['__dirty__']
      }
    }

    this.grist.refresh()
  }

  onRecordChange(e) {
    this.checkDirties()

    this.editHandler.call()
  }

  get fetchOptions() {
    return this._fetchOptions
  }

  set fetchOptions(fetchOptions) {
    this._fetchOptions = fetchOptions

    this.fetch()
  }

  get fetchHandler() {
    if (!this._fetchHandlerWrap) {
      this._fetchHandlerWrap = async (...args) => {
        try {
          this.grist.showSpinner()
          return await (this._fetchHandler || NOOP)(...args)
        } finally {
          this.grist.hideSpinner()
        }
      }
    }

    return this._fetchHandlerWrap
  }

  set fetchHandler(fetchHandler) {
    this._fetchHandler = fetchHandler
    delete this._fetchHandlerWrap
  }

  get editHandler() {
    return this._editHandler || NOOP
  }

  set editHandler(editHandler) {
    this._editHandler = editHandler
  }

  get sorters() {
    return this._sorters
  }

  set sorters(sorters) {
    this._sorters = sorters
  }

  async attach(reset = false) {
    var { page = 0, limit = 20 } = this

    /*
     * page는 0 based index가 아님에 주의한다.
     * 즉, page 값이 1 은 첫페이지를 의미한다.
     */
    if (reset) {
      this.records = null
      page = 1
    } else {
      /* attach의 경우는 grist data의 변경상태를 유지하기 위해서, grist._data 를 기반으로 한다. */
      this.records = this.grist._data ? this.grist._data.records : null
      page = page + 1
    }

    return this._update(
      {
        /* fetch에서 limit과 page를 제공하지 않는 경우를 대비함. */
        limit,
        page,
        ...(await this.fetchHandler.call(null, {
          page,
          limit,
          sorters: this.sorters,
          options: this.fetchOptions
        }))
      },
      reset
    )
  }

  async fetch({ page = this.page, limit = this.limit, sorters = this.sorters } = {}) {
    /* fetchHandler should reture { page, limit, total, records } */
    this.records = null

    this.sorters = sorters

    return this._update({
      /* fetch에서 limit과 page를 제공하지 않는 경우를 대비함. */
      limit,
      page,
      ...(await this.fetchHandler.call(null, {
        page,
        limit,
        sorters,
        options: this.fetchOptions
      }))
    })
  }

  async _update({ page, limit, total, records }) {
    // total을 감안해서 page가 최대값을 넘지 않도록 한다.
    var maxpage = _calculateTotalPage(limit, total)
    if (maxpage < page) {
      return await this.fetch({ page: maxpage, limit })
    }
    // CONFIRM-ME 위 코드에 대한 설명이 필요함!!!.

    // page와 limit이 없는 경우 records 검사 전에 초기화
    this.page = this.page || page
    this.limit = this.limit || limit

    if (!records) {
      return
    }

    if (!this.records) {
      this.records = records
    } else if (this.page < page) {
      // attach인 경우에는 records를 append한다.
      this.records = [...this.records, ...records]
    } else {
      return
    }

    this.limit = limit
    this.total = total
    this.page = page

    this.grist.data = {
      page: this.page,
      limit: this.limit,
      total: this.total,

      records: this.records
    }
  }
}
