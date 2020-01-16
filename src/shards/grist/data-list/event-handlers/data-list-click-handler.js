/**
 * data-list 의 click handler
 *
 * - handler의 this 는 data-list임.
 */
export function dataListClickHandler(e) {
  e.stopPropagation()

  /* target should be 'record-partial' */
  var target = e.target
  var { record, rowIndex } = target

  /* do rows click handler */
  // var { click: rowsClick } = this.config.rows.handlers
  // var columns = this.config.columns
  // rowsClick && rowsClick(columns, this.data, null /* column */, record, rowIndex, target)
}
