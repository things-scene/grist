import { html } from 'lit-html'

export const BooleanRenderer = (value, column, record, rowIndex, field) => {
  return html`
    <input
      type="checkbox"
      .checked=${!!value}
      center
      ?disabled=${!column.record.editable}
      @click=${e => {
        /*
         * 특별하게, checkbox인 경우에, editor가 활성화되지 않아도, renderer에서 값을 변경할 수 있게 함.
         * checkbox가 클릭되면, 클릭에 의해 변경된 값을 레코드에 반영하기 위해서 value-changed 이벤트를 발생시킨다.
         *
         * 만일, readonly인 경우에는 click 이벤트가 발생하지 않으므로, 클릭으로 에디트할 수 없게 됨.
         */
        field.dispatchEvent(
          new CustomEvent('field-change', {
            bubbles: true,
            composed: true,
            detail: {
              before: value,
              after: e.target.checked,
              column: column,
              record: record,
              row: rowIndex
            }
          })
        )
      }}
    />
  `
}
