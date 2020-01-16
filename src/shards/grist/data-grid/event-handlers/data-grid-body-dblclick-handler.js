/**
 * data-grid-body 의 dblclick handler
 *
 * - handler의 this 는 data-grid-body임.
 */
export async function dataGridBodyDblclickHandler(e) {
  e.stopPropagation()

  /* target should be 'data-grid-field' */
  var target = e.target
  var { record, rowIndex, columnIndex, column } = target

  if (!column) {
    /* 여백 컬럼이 클릭된 경우 */
    return
  }

  if (!isNaN(rowIndex) && !isNaN(columnIndex)) {
    /* 새로 시작된 에디터가 이 click 이벤트를 받지 못하도록 한 사이클을 delay 시킴 */
    setTimeout(() => {
      this.startEditTarget(rowIndex, columnIndex)
    }, 1)
  } else {
    console.error('should not be here.')
    return
  }

  /* do column dblclick handler */
  var { dblclick } = column.handlers
  dblclick && dblclick(this.columns, this.data, column, record, rowIndex, target)

  /* do rows dblclick handler */
  var { dblclick: rowsDblclick } = this.config.rows.handlers
  rowsDblclick && rowsDblclick(this.columns, this.data, column, record, rowIndex, target)
}
