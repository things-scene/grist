import { RecordViewHandler } from './record-view-handler'
import { SelectRow } from './select-row'
import { SelectRowToggle } from './select-row-toggle'

var HANDLERS = {
  'record-view': RecordViewHandler,
  'select-row': SelectRow,
  'select-row-toggle': SelectRowToggle
}

export function registerHandler(type, handler) {
  HANDLERS[type] = handler
}

export function unregisterHandler(type) {
  delete HANDLERS[type]
}

export function getHandlers() {
  return { ...HANDLERS }
}

export function getHandler(type) {
  if (typeof type == 'function') {
    return type
  }

  return HANDLERS[type]
}
