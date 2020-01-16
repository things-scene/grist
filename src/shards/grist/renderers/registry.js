import { BooleanRenderer } from './boolean-renderer'
import { TextRenderer } from './text-renderer'
import { PasswordRenderer } from './password-renderer'
import { DateRenderer } from './date-renderer'
import { ColorRenderer } from './color-renderer'
import { ProgressRenderer } from './progress-renderer'
import { LinkRenderer } from './link-renderer'

var RENDERERS = {
  string: TextRenderer,
  text: TextRenderer,
  email: TextRenderer,
  tel: TextRenderer,
  password: PasswordRenderer,
  integer: TextRenderer,
  float: TextRenderer,
  number: TextRenderer,
  select: TextRenderer,
  boolean: BooleanRenderer,
  checkbox: BooleanRenderer,
  month: TextRenderer,
  week: TextRenderer,
  date: DateRenderer,
  time: DateRenderer,
  datetime: DateRenderer,
  color: ColorRenderer,
  progress: ProgressRenderer,
  link: LinkRenderer
}

export function registerRenderer(type, renderer) {
  RENDERERS[type] = renderer
}

export function unregisterRenderer(type) {
  delete RENDERERS[type]
}

export function getRenderers() {
  return { ...RENDERERS }
}

export function getRenderer(type) {
  if (typeof type == 'function') {
    return type
  }

  return RENDERERS[type || 'text'] || TextRenderer
}
