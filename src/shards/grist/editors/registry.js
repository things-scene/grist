import {
  TextInput,
  EmailInput,
  TelInput,
  PasswordInput,
  NumberInput,
  Select,
  CheckboxInput,
  MonthInput,
  WeekInput,
  DateInput,
  TimeInput,
  DateTimeInput,
  ColorInput
} from './input-editors'

var EDITORS = {
  string: TextInput,
  text: TextInput,
  email: EmailInput,
  tel: TelInput,
  password: PasswordInput,
  integer: NumberInput,
  float: NumberInput,
  number: NumberInput,
  select: Select,
  boolean: CheckboxInput,
  checkbox: CheckboxInput,
  month: MonthInput,
  week: WeekInput,
  date: DateInput,
  time: TimeInput,
  datetime: DateTimeInput,
  color: ColorInput,
  progress: NumberInput,
  link: TextInput
}

export function registerEditor(type, editor) {
  EDITORS[type] = editor
}

export function unregisterEditor(type) {
  delete EDITORS[type]
}

export function getEditors() {
  return { ...EDITORS }
}

export function getEditor(type) {
  if (typeof type == 'function') {
    return type
  }

  return function(value, column, record, rowIndex, field) {
    var clazz = EDITORS[type || 'text'] || TextInput

    var element = new clazz()

    element.value = value
    element.record = record
    element.column = column
    element.row = rowIndex
    element.field = field

    return element
  }
}
