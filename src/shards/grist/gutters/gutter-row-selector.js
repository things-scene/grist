import { html } from 'lit-element'

export class GutterRowSelector {
  static instance(config = {}) {
    return Object.assign(
      {},
      {
        type: 'gutter',
        name: '__selected__',
        gutterType: 'row-selector',
        width: 26,
        resizable: false,
        sortable: false,
        header: {
          renderer: function(column) {
            var checked = ((this.data || {}).records || []).find(record => record['__selected__'])

            return html`
              <input
                type="checkbox"
                .checked=${checked}
                @change=${e => {
                  let selected = column.multiple ? e.target.checked : false

                  this.dispatchEvent(
                    new CustomEvent('select-all-change', {
                      bubbles: true,
                      composed: true,
                      detail: {
                        selected
                      }
                    })
                  )

                  e.stopPropagation()
                }}
              />
            `
          }
        },
        record: {
          renderer: function(value, column, record, rowIndex, field) {
            return html`
              <input
                center
                type=${column.multiple ? 'checkbox' : 'radio'}
                .checked=${!!value}
                @change=${e => {
                  let selected = e.target.checked

                  let detail = column.multiple
                    ? {
                        added: selected ? [record] : [],
                        removed: selected ? [] : [record]
                      }
                    : {
                        records: selected ? [record] : []
                      }

                  field.dispatchEvent(
                    new CustomEvent('select-record-change', {
                      bubbles: true,
                      composed: true,
                      detail
                    })
                  )

                  e.stopPropagation()
                }}
              />
            `
          },
          align: 'center'
        },
        forGrid: true,
        forList: true
      },
      config
    )
  }
}
