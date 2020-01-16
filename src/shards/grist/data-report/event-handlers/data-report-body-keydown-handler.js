const KEY_LEFT = 37
const KEY_UP = 38
const KEY_RIGHT = 39
const KEY_DOWN = 40
const KEY_ENTER = 13
const KEY_TAP = 9
const KEY_BACKSPACE = 8
const KEY_ESC = 27
const KEY_PAGEUP = 33
const KEY_PAGEDOWN = 34

/**
 * data-report-body 의 keydown handler
 *
 * - handler의 this 는 data-report-body임.
 */
export async function dataReportBodyKeydownHandler(e) {
  // arrow-key
  var keyCode = e.keyCode
  var { row = 0, column = 0 } = this.focused || {}
  var { records = [] } = this.data || {}
  var maxrow = this.config.rows.appendable ? records.length : records.length - 1
  var maxcolumn = (this.columns || []).filter(column => !column.hidden).length - 1

  switch (keyCode) {
    case KEY_UP:
      row = Math.max(0, row - 1)
      break

    case KEY_DOWN:
      row = Math.min(maxrow, row + 1)
      break

    case KEY_ENTER:
      if (maxcolumn > column) {
        column++
      } else if (maxrow > row) {
        row++
      }
      break

    case KEY_LEFT:
    case KEY_BACKSPACE:
      column = Math.max(0, column - 1)
      break

    case KEY_RIGHT:
    case KEY_TAP:
      column = Math.min(maxcolumn, column + 1)
      break

    case KEY_PAGEUP:
      /* TODO 페이지당 레코드의 수를 계산해서 증감시켜야 한다. */
      row = Math.max(0, row - 10)
      break

    case KEY_PAGEDOWN:
      row = Math.min(maxrow, row + 10)
      break

    case KEY_ESC:
      return

    default:
      return
  }

  if (!this.focused || this.focused.row !== row || this.focused.column !== column) {
    this.focused = { row, column }
  }

  /* arrow key에 의한 scrollbar의 자동 움직임을 하지 못하도록 한다. */
  e.preventDefault()
}
