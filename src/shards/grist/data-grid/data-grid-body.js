import { LitElement, html } from 'lit-element'

import './data-grid-field'

import { dataGridBodyKeydownHandler } from './event-handlers/data-grid-body-keydown-handler'
import { dataGridBodyClickHandler } from './event-handlers/data-grid-body-click-handler'
import { dataGridBodyDblclickHandler } from './event-handlers/data-grid-body-dblclick-handler'

import { dataGridBodyStyle } from './data-grid-body-style'

function calcScrollPos(parent, child) {
  /* getBoundingClientRect는 safari에서 스크롤 상태에서 다른 브라우저와는 다른 값을 리턴함 - 사파리는 약간 이상 작동함. */
  var { top: ct, left: cl, right: cr, bottom: cb } = child.getBoundingClientRect()
  var { top: pt, left: pl, right: pr, bottom: pb } = parent.getBoundingClientRect()
  var { scrollLeft, scrollTop } = parent
  var scrollbarWidth = parent.clientWidth - parent.offsetWidth
  var scrollbarHeight = parent.clientHeight - parent.offsetHeight

  return {
    left: cl < pl ? scrollLeft - (pl - cl) : cr > pr ? scrollLeft - (pr - cr) - scrollbarWidth : undefined,
    top: ct < pt ? scrollTop - (pt - ct) : cb > pb ? scrollTop - (pb - cb) - scrollbarHeight : undefined
  }
}

class DataGridBody extends LitElement {
  static get properties() {
    return {
      config: Object,
      columns: Array,
      data: Object,
      focused: Object,
      editTarget: Object
    }
  }

  static get styles() {
    return [dataGridBodyStyle]
  }

  render() {
    var { row: focusedRow = 0, column: focusedColumn = 0 } = this.focused || {}
    var { row: editingRow, column: editingColumn } = this.editTarget || {}

    var columns = (this.columns || []).filter(column => !column.hidden)
    var data = this.data || {}
    var { records = [] } = data

    /*
     * 레코드를 추가할 수 있는 경우에는 항상 추가 레코드를 보여준다.
     * 만약, 이전 방식처럼, 커서를 옮겨야만 새로운 레코드가 보이게 하고 싶다면, 조건부를 다음의 코드로 대체한다.
     * -- if (focusedRow == records.length)
     */
    if (this.config && this.config.rows.appendable) {
      records = [...records, { __dirty__: '+' }]
    }

    return html`
      ${records.map((record, idxRow) => {
        var attrFocusedRow = idxRow === focusedRow
        var attrSelected = record['__selected__']
        var attrOdd = idxRow % 2
        var dirtyFields = record['__dirtyfields__'] || {}

        return html`
          ${columns.map(
            (column, idxColumn) => html`
              <data-grid-field
                .data=${data}
                .rowIndex=${idxRow}
                .columnIndex=${idxColumn}
                .column=${column}
                .record=${record}
                ?gutter=${column.type == 'gutter'}
                ?odd=${attrOdd}
                ?focused-row=${attrFocusedRow}
                ?selected-row=${attrSelected}
                ?focused=${idxRow === focusedRow && idxColumn === focusedColumn}
                ?editing=${idxRow === editingRow && idxColumn === editingColumn}
                .value=${record[column.name]}
                ?dirty=${!!dirtyFields[column.name]}
              ></data-grid-field>
            `
          )}
          <data-grid-field
            .data=${data}
            .rowIndex=${idxRow}
            .record=${record}
            ?odd=${attrOdd}
            ?focused-row=${attrFocusedRow}
            ?selected-row=${attrSelected}
          ></data-grid-field>
        `
      })}
    `
  }

  firstUpdated() {
    /* focus() 를 받을 수 있도록 함. */
    this.setAttribute('tabindex', '-1')

    /*
     * focusout 으로 property를 변경시키는 경우, focusout에 의해 update가 발생하는 경우에는,
     * 그리드 내부의 컴포넌트가 갱신되는 현상을 초래하게 된다.
     * 따라서, focusout 핸들러에서 update를 유발하는 코드는 강력하게 금지시킨다.
     */
    this.addEventListener('focusout', e => {
      if (this._focusedListener) {
        window.removeEventListener('keydown', this._focusedListener)
        delete this._focusedListener
      }
    })

    this.addEventListener('focusin', e => {
      if (!this._focusedListener) {
        this._focusedListener = dataGridBodyKeydownHandler.bind(this)
        window.addEventListener('keydown', this._focusedListener)
      }
    })

    this.shadowRoot.addEventListener('click', dataGridBodyClickHandler.bind(this))

    this.shadowRoot.addEventListener('dblclick', dataGridBodyDblclickHandler.bind(this))
  }

  startEditTarget(row, column) {
    var { editable } = (this.columns || []).filter(column => !column.hidden)[column].record

    if (!editable || (this.editTarget && row == this.editTarget.row && column == this.editTarget.column)) {
      return
    }

    this.editTarget = {
      row,
      column
    }
  }

  shouldUpdate(changes) {
    if (!changes.has('editTarget')) {
      /*
       * 큰 변화에 대해서는 실제 update가 발생되기 전에 editTarget을 초기화한다.
       */
      this.editTarget = null
    }

    return super.shouldUpdate(changes)
  }

  updated(changes) {
    if (changes.has('focused')) {
      let element = this.shadowRoot.querySelector('[focused]')
      if (!element) {
        return
      }

      let { top, left } = calcScrollPos(this, element)
      // TODO this.scroll()을 사용하면, 효과가 좋으나 left 계산에 문제가 있는 것 같음.
      // this.scroll({
      //   top,
      //   left,
      //   behavior: 'smooth'
      // })
      if (top !== undefined) {
        this.scrollTop = top
      }
      if (left !== undefined) {
        this.scrollLeft = left
      }
    }
  }

  focus() {
    super.focus()

    if (!this.focused || this.focused.row === undefined) {
      let { records = [] } = this.data || {}
      let row = records.findIndex(record => record['__selected__'])

      this.focused = { row: row == -1 ? 0 : row, column: 0 }
    }
  }
}

customElements.whenDefined('data-grid-body', DataGridBody)
