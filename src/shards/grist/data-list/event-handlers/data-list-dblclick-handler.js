/**
 * data-list 의 dblclick handler
 *
 * - handler의 this 는 data-list임.
 */
export async function dataListDblclickHandler(e) {
  e.stopPropagation()

  /* target should be 'record-partial' */
  var target = e.target
  var { record, rowIndex } = target

  /* do rows dblclick handler */
  // var { click: rowsDblclick } = this.config.rows.handlers
  // var columns = this.config.columns
  // rowsDblclick && rowsDblclick(columns, this.data, null /* column */, record, rowIndex, target)
}
