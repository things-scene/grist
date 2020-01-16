import { html } from 'lit-html'

export const LinkRenderer = (value, column, record, rowIndex, field) => {
  var { href, target } = column.record.options || {}

  value = value === undefined ? '' : value

  if (typeof href == 'function') {
    href = href(value, column, record, rowIndex, field)
  }

  return target
    ? html`
        <a style="text-decoration:none;color:inherit" href=${href || value} target=${target}>${value}</a>
      `
    : html`
        <a style="text-decoration:none;color:inherit" href=${href || value}>${value}</a>
      `
}
