/**
 * data-report-body 의 click handler
 *
 * - handler의 this 는 data-report-body임.
 */
export function dataReportBodyClickHandler(e) {
  e.stopPropagation()

  /* target should be 'data-report-field' */
  var target = e.target
  var { column, record, rowIndex, columnIndex } = target

  if (!column) {
    /* 여백 컬럼이 클릭된 경우 */
    return
  }

  if (!isNaN(rowIndex) && !isNaN(columnIndex)) {
    if (!this.focused || rowIndex !== this.focused.row || columnIndex !== this.focused.column) {
      this.focused = {
        row: rowIndex,
        column: columnIndex
      }
    } else {
      this.requestUpdate()
    }
  } else {
    console.error('should not be here.')
  }

  /* do column click handler */
  var { click } = column.handlers
  click && click(this.columns, this.data, column, record, rowIndex, target)

  /* do rows click handler */
  var { click: rowsClick } = this.config.rows.handlers
  rowsClick && rowsClick(this.columns, this.data, column, record, rowIndex, target)
}
