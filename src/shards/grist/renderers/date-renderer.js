// TODO 로케일 설정에 따라서 포맷이 바뀌도록 해야한다.
const DATETIME_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
  // timeZone: 'America/Los_Angeles'
}

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

export const DateRenderer = (value, column, record, rowIndex, field) => {
  if (!value) {
    return ''
  }

  if (!isNaN(Number(value))) value = Number(value)

  var options = column.record.options || column.type === 'datetime' ? DATETIME_OPTIONS : DATE_OPTIONS
  var formatter = new Intl.DateTimeFormat(navigator.language, options)

  return formatter.format(new Date(value))
}
