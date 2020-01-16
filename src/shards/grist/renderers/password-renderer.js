export const PasswordRenderer = (value, column, record, rowIndex, field) => {
  return Array(String(value).length)
    .fill('*')
    .join('')
}
