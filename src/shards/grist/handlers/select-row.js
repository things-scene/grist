/*
 * handler들은 data-grid-field 로부터 호출되는 것을 전제로 하며,
 * 전반적인 처리를 위해서, columns 및 data 정보를 포함해서 제공할 수 있어야 한다.
 */

export const SelectRow = function(columns, data, column, record, rowIndex, field) {
  field.dispatchEvent(
    new CustomEvent('select-record-change', {
      bubbles: true,
      composed: true,
      detail: {
        added: [record]
      }
    })
  )
}
