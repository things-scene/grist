import { NumberFormatter } from './number-formatter'
import { DateFormatter } from './date-formatter'
import { TextFormatter } from './text-formatter'

const NOOP = () => {}

var FORMATTERS = {
  number: NumberFormatter,
  date: DateFormatter,
  text: TextFormatter
}

export function registerFormatter(type, formatter) {
  FORMATTERS[type] = formatter
}

export function unregisterFormatter(type) {
  delete FORMATTERS[type]
}

export function getFormatters() {
  return { ...FORMATTERS }
}

export function getFormatter(type) {
  if (typeof type == 'function') {
    return type
  }

  return FORMATTERS[type] || NOOP
}
