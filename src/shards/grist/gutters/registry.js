import { GutterSequence } from './gutter-sequence'
import { GutterRowSelector } from './gutter-row-selector'
import { GutterButton } from './gutter-button'
import { GutterDirty } from './gutter-dirty'

var GUTTERS = {
  sequence: GutterSequence,
  'row-selector': GutterRowSelector,
  button: GutterButton,
  dirty: GutterDirty
}

export function registerGutter(name, gutter) {
  GUTTERS[name] = gutter
}

export function unregisterGutter(name) {
  delete GUTTERS[name]
}

export function getGutters() {
  return { ...GUTTERS }
}

export const generateGutterColumn = config => {
  var clazz = GUTTERS[config.gutterName]

  if (clazz) {
    return clazz.instance(config)
  }
}
