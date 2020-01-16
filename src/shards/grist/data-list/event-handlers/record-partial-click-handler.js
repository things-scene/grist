/**
 * record-partial 의 click handler
 *
 * - handler의 this 는 record-partial임.
 */
export function recordPartialClickHandler(e) {
  e.stopPropagation()

  /* current-target should be [content] or 'data-list-gutter' */
  var target = e.target
  var { column, record, rowIndex, columnIndex } = target

  if (column && column.type == 'gutter') {
    /* Gutter가 클릭된 경우 */
    /* do column click handler */
    var { click } = column.handlers
    click && click(this.columns, this.data, column, record, rowIndex, target)

    return
  } else {
    var { click: rowsClick } = this.config.rows.handlers
    if (rowsClick) {
      rowsClick(this.columns, this.data, column, record, rowIndex, target)
    } else {
      /* content 가 클릭된 경우 - 레코드뷰 팝업을 실행한다. */
      this.popupRecordView()
    }
  }
}
