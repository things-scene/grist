import { html } from 'lit-html'

export const ColorRenderer = (value, column, record, rowIndex, field) => {
  value = value === undefined ? '#000' : value

  return html`
    <div style="display:block;background-color:${value}">${value}</div>
  `
}
