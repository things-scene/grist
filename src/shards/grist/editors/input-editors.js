import { LitElement, html, css } from 'lit-element'

const STYLE = css`
  :host {
    display: block;

    width: 100%;
    height: 100%;

    border: 0;
    background-color: transparent;
  }

  :host > * {
    display: block;

    width: 100%;
    height: 100%;

    border: 0;
    background-color: transparent;

    box-sizing: border-box;

    font-size: inherit;
    font-family: inherit;
  }

  :host > input[type='checkbox'] {
    width: initial;
    margin: auto;
  }
  input[type='checkbox'],
  input[type='radio'] {
    zoom: var(--grist-input-zoom);
  }

  @media screen and (max-width: 460px) {
    :host > * {
      border: initial;
      background-color: initial;
    }
    *:focus {
      outline: none;
    }
  }
`

export class InputEditor extends LitElement {
  static get properties() {
    return {
      value: Object,
      column: Object,
      record: Object,
      rowIndex: Number,
      field: Object
    }
  }

  static get styles() {
    return STYLE
  }

  render() {
    return this.editorTemplate
  }

  get editor() {
    return this.shadowRoot.firstElementChild
  }

  async firstUpdated() {
    this.shadowRoot.addEventListener('change', this.onchange.bind(this))
    this.shadowRoot.addEventListener('focusout', this.onfocusout.bind(this))
    this.shadowRoot.addEventListener('click', this.onclick.bind(this))
    this.shadowRoot.addEventListener('dblclick', this.ondblclick.bind(this))

    var align = this.column.record && this.column.record.align
    if (align) {
      this.style.textAlign = align
      this.style.textAlignLast = align /* for select */
    }

    this.value = this._dirtyValue = this.formatForEditor(this.record[this.column.name])

    this.focus()
    await this.updateComplete
    this.select()
  }

  select() {
    this.editor.select && this.editor.select()
  }

  focus() {
    this.editor.focus()
  }

  formatForEditor(value) {
    return value === undefined ? '' : value
  }

  formatFromEditor(e) {
    return e.target.value
  }

  onfocusout() {
    if (this._dirtyValue !== this.value) {
      this.dispatchEvent(
        new CustomEvent('field-change', {
          bubbles: true,
          composed: true,
          detail: {
            before: this.value,
            after: this._dirtyValue,
            column: this.column,
            record: this.record,
            row: this.row
          }
        })
      )
    }
  }

  onchange(e) {
    e.stopPropagation()

    this._dirtyValue = this.formatFromEditor(e)
  }

  onclick(e) {
    e.stopPropagation()
  }

  ondblclick(e) {
    e.stopPropagation()
  }

  get editorTemplate() {
    return html``
  }
}

customElements.whenDefined('input-editor', InputEditor)

export class TextInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="text" .value=${this.value} />
    `
  }
}
customElements.whenDefined('text-input', TextInput)

export class EmailInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="email" .value=${this.value} />
    `
  }
}
customElements.whenDefined('email-input', EmailInput)

export class TelInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="tel" .value=${this.value} />
    `
  }
}
customElements.whenDefined('tel-input', TelInput)

export class NumberInput extends InputEditor {
  formatFromEditor(e) {
    let value = e.target.value

    switch (this.column.type) {
      case 'float':
        return Number.parseFloat(value)
      case 'integer':
        return Number.parseInt(value)
      default:
        return Number(value)
    }
  }

  get editorTemplate() {
    var { min = -Infinity, max = Infinity } = this.column.record.options || {}

    return html`
      <input type="number" .value=${this.value} .min=${Number(min)} .max=${Number(max)} />
    `
  }
}
customElements.whenDefined('number-input', NumberInput)

export class PasswordInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="password" .value=${this.value} />
    `
  }
}
customElements.whenDefined('password-input', PasswordInput)

export class DateInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="date" .value=${this.value} />
    `
  }
}
customElements.whenDefined('date-input', DateInput)

export class MonthInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="month" .value=${this.value} />
    `
  }
}
customElements.whenDefined('month-input', MonthInput)

export class WeekInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="week" .value=${this.value} />
    `
  }
}
customElements.whenDefined('week-input', WeekInput)

export class TimeInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="time" .value=${this.value} />
    `
  }
}
customElements.whenDefined('time-input', TimeInput)

export class DateTimeInput extends InputEditor {
  formatForEditor(timestamp) {
    if (!timestamp) {
      timestamp = Date.now()
    }
    var datetime = new Date(timestamp)

    var tzoffset = datetime.getTimezoneOffset() * 60000 //offset in milliseconds

    return new Date(timestamp - tzoffset).toISOString().slice(0, -1)
  }

  formatFromEditor(e) {
    var value = e.target.value
    var datetime = new Date(value)

    return datetime.getTime()
  }

  get editorTemplate() {
    return html`
      <input type="datetime-local" .value=${this.value} />
    `
  }
}
customElements.whenDefined('datetime-input', DateTimeInput)

export class ColorInput extends InputEditor {
  get editorTemplate() {
    return html`
      <input type="color" .value=${this.value} />
    `
  }
}
customElements.whenDefined('color-input', ColorInput)

export class CheckboxInput extends InputEditor {
  formatFromEditor(e) {
    return e.target.checked
  }

  get editorTemplate() {
    return html`
      <input type="checkbox" .checked=${!!this.value} />
    `
  }
}
customElements.whenDefined('checkbox-input', CheckboxInput)

export class Select extends InputEditor {
  get editorTemplate() {
    var { options = [] } = this.column.record || {}
    options = options.map(option => {
      if (typeof option == 'string') {
        return {
          display: option,
          value: option
        }
      }
      return option
    })

    return html`
      <select>
        ${options.map(
          option => html`
            <option ?selected=${option.value == this.value}>${option.display}</option>
          `
        )}
      </select>
    `
  }
}
customElements.whenDefined('select-input', Select)
