/**
 * record-partial 의 long-press handler
 *
 * - handler의 this 는 record-partial임.
 */
export function recordPartialLongPressHandler(e) {
  e.stopPropagation()

  /* current-target should be [content] or 'data-list-gutter' */
  var target = e.target
  var { column, record, rowIndex, columnIndex } = target

  if (column && column.type == 'gutter') {
    /*
     * Gutter가 클릭된 경우
     * TODO record-partial의 long-press handling의 성능을 확인하고,
     * gutter에 long-press를 적용할 수 있는 지 확인한 후에 활성화하자.
     */
    /* do column click handler */
    // var { dblclick } = column.handlers
    // dblclick && dblclick(this.columns, this.data, column, record, rowIndex, target)
    // return
  } else {
    var { dblclick: rowsDblClick } = this.config.rows.handlers
    if (rowsDblClick) {
      rowsDblClick(this.columns, this.data, column, record, rowIndex, target)
    }
  }
}
