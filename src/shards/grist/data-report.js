import { LitElement, html, css } from 'lit-element'

import { buildConfig } from './configure/config-builder'
import { buildColumn } from './configure/column-builder'

import './data-report/data-report-component'

import { DataProvider } from './data-provider'

import { pulltorefresh } from '../pull-to-refresh'

const DEFAULT_DATA = {
  page: 1,
  limit: 20,
  total: 1,
  records: []
}

export class DataReport extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background-color: var(--report-background-color);
          padding: var(--report-padding);
          min-height: 120px;

          overflow: hidden;

          /* for pulltorefresh controller */
          position: relative;
        }

        data-report-component {
          flex: 1;
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
      config: Object,
      data: Object,
      fetchHandler: Object,
      fetchOptions: Object,
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
        scrollable: this.report,
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

      <data-report-component id="report" .config=${this._config} .data=${this._data}> </data-report-component>

      <oops-spinner ?show=${this._showSpinner}></oops-spinner>
    `
  }

  async fetch(reset = true) {
    if (!this._config) {
      /* avoid to be here */
      console.warn('report is not configured yet.')
      return
    }

    if (reset) {
      /*
       * scroll 의 현재위치에 의해서 scroll 이벤트가 발생할 수 있으므로, 이를 방지하기 위해서 스크롤의 위치를 TOP으로 옮긴다.
       * (scroll 이 첫페이지 크기 이상으로 내려가 있는 경우, 첫페이지부터 다시 표시하는 경우에, scroll 이벤트가 발생한다.)
       */
      this.report.scrollTop = 0
    }

    if (this.dataProvider) {
      await this.dataProvider.attach(reset)
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

    if (changes.has('fetchOptions')) {
      this.dataProvider.fetchOptions = this.fetchOptions
    }

    if (changes.has('data')) {
      this.reset()
    }
  }

  get report() {
    return this.shadowRoot.querySelector('#report')
  }

  showSpinner() {
    this._showSpinner = true
  }

  hideSpinner() {
    this._showSpinner = false
  }

  focus() {
    super.focus()

    this.report.focus()
  }

  refresh() {
    this.requestUpdate()
  }

  reset() {
    var { limit = DEFAULT_DATA.limit, page = DEFAULT_DATA.page, total = DEFAULT_DATA.total, records = [] } = this.data

    this._data = {
      limit,
      page,
      total,
      records: this.sortByGroups(records).map((record, idx) => {
        return {
          ...record,
          __seq__: (page - 1) * limit + idx + 1
        }
      })
    }

    // console.log(this._data.records)
  }

  sortByGroups(sortedRecords) {
    var { groups, totals } = this._config.rows
    var { columns } = this._config

    var getColumnIndex = name => columns.filter(column => !column.hidden).findIndex(column => column.name == name)

    /* 그룹 토털 레코드를 추가한다. */
    var groupFieldsForTotalRecord = [{ column: '*', title: 'grand total', align: 'right' } /* for total */, ...groups]
    groupFieldsForTotalRecord = groupFieldsForTotalRecord.map(group => {
      return {
        ...group,
        titleColumn: buildColumn({
          record: {
            align: group.align || 'right'
          }
        })
      }
    })
    let lastGroupValues
    let reportRecords = []
    let totalicRecords = sortedRecords[0]
      ? (function() {
          /* 처음 만드는 total records */
          let record = sortedRecords[0]
          let totalBase = totals.reduce((base, field) => {
            base[field] = record[field]
            return base
          }, {})
          let groupBase = {}

          return groupFieldsForTotalRecord.map((group, idx) => {
            groupBase[group.column] = record[group.column]

            return {
              ...totalBase,
              ...groupBase,
              [group.column]: record[group.column],
              '*': {
                titleColumn: group.titleColumn,
                value: group.title,
                groupName: group.column,
                /* 이 레코드 그룹에 해당하는 첫번째 레코드의 행 번호(1 부터 시작하는 번호임.) - grid layout의 row 지정에 사용됨. */
                row: 1,
                rowspan: 1,
                /* 이 레코드 그룹의 컬럼에 해당하는 열 번호(1 부터 시작하는 번호임.) - grid layout의 column 지정에 사용됨. */
                column:
                  group.column !== '*'
                    ? getColumnIndex(group.column) + 1
                    : getColumnIndex(groups[0].column) + 1 /* grand total 은 첫번째 그룹 컬럼을 사용한다. */,
                colspan:
                  group.column !== '*' ? groupFieldsForTotalRecord.length - idx : groupFieldsForTotalRecord.length - 1
              }
            }
          })
        })()
      : [
          {
            '*': {
              titleColumn: groupFieldsForTotalRecord[0].titleColumn,
              value: 'grand total',
              groupName: '*',
              row: 1,
              rowspan: 1,
              column: 1,
              colspan: 0
            }
          }
        ]

    var row = 0

    for (let record of sortedRecords) {
      let groupValues = groups.reduce((base, group) => {
        base[group.column] = record[group.column]
        return base
      }, {})
      let isSameGroupRecord = true
      let totalsStack = []
      let groupBase = {}

      row++

      if (lastGroupValues) {
        for (let idx in groupFieldsForTotalRecord) {
          let group = groupFieldsForTotalRecord[idx]
          let totalRecord = totalicRecords[idx]

          groupBase[group.column] = record[group.column]

          if (
            group.column == '*' ||
            (isSameGroupRecord && groupValues[group.column] === lastGroupValues[group.column])
          ) {
            for (let field of totals) {
              totalRecord[field] += record[field]
            }
            totalRecord['*'].rowspan++

            continue
          }
          isSameGroupRecord = false

          totalsStack.push({
            idx,
            record: totals.reduce(
              (sum, field) => {
                sum[field] = record[field]
                return sum
              },
              {
                ...groupBase,
                [group.column]: record[group.column],
                '*': {
                  titleColumn: group.titleColumn,
                  groupName: group.column,
                  value: group.title,
                  row,
                  rowspan: 1,
                  column: getColumnIndex(group.column) + 1,
                  colspan: totalicRecords[idx]['*'].colspan
                }
              }
            )
          })
        }

        totalsStack
          .reverse()
          .map(({ record, idx }) => {
            reportRecords.push(totalicRecords[idx])
            totalicRecords[idx] = null

            if (record['*'].value) {
              totalicRecords.forEach(record => record && record['*'].rowspan++)
              row++
            }

            return { record, idx }
          })
          .forEach(({ record, idx }) => {
            record['*'].row = row
            totalicRecords[idx] = record
          })
      }

      reportRecords.push(record)

      lastGroupValues = groupValues
    }

    /* 마지막 남은 토탈 레코드들을 추가한다. */
    var poped
    while ((poped = totalicRecords.pop())) {
      reportRecords.push(poped)
      if (poped['*'].value) {
        totalicRecords.forEach(record => record['*'].rowspan++)
      }
    }

    return reportRecords
  }
}

customElements.whenDefined('data-report', DataReport)
