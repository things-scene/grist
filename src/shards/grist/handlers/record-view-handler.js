import { html } from 'lit-html'
import { openPopup } from '../../layout'
import '../record-view/record-view'

/*
 * handler들은 data-grid-field 로부터 호출되는 것을 전제로 하며,
 * 전반적인 처리를 위해서, columns 및 data 정보를 포함해서 제공할 수 있어야 한다.
 */

export const RecordViewHandler = function(columns, data, column, record, rowIndex, field) {
  var popup = openPopup(
    html`
      <record-view
        .field=${field}
        .columns=${columns}
        .column=${column}
        .record=${record}
        .rowIndex=${rowIndex}
        @reset=${e => {
          field.dispatchEvent(
            new CustomEvent('record-reset', {
              bubbles: true,
              composed: true,
              detail: record
            })
          )
        }}
        @cancel=${e => {
          field.dispatchEvent(
            new CustomEvent('record-reset', {
              bubbles: true,
              composed: true,
              detail: record
            })
          )
          popup.close()
        }}
        @ok=${e => {
          popup.close()
        }}
      ></record-view>
    `,
    {
      backdrop: true,
      size: 'large',
      title: record['name']
    }
  )
}
