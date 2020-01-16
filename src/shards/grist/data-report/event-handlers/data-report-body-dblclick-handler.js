/**
 * data-report-body 의 dblclick handler
 *
 * - handler의 this 는 data-report-body임.
 */
export async function dataReportBodyDblclickHandler(e) {
  e.stopPropagation()

  /* target should be 'data-report-field' */
  var target = e.target
  var { record, rowIndex, column } = target

  if (!column) {
    /* 여백 컬럼이 클릭된 경우 */
    return
  }

  /* do column dblclick handler */
  var { dblclick } = column.handlers
  dblclick && dblclick(this.columns, this.data, column, record, rowIndex, target)

  /* do rows dblclick handler */
  var { dblclick: rowsDblclick } = this.config.rows.handlers
  rowsDblclick && rowsDblclick(this.columns, this.data, column, record, rowIndex, target)
}
