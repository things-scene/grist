import icon from './grist.png'

export default {
  type: 'grist',
  description: 'grist',
  group: 'table',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon,
  model: {
    type: 'grist',
    left: 10,
    top: 10,
    width: 400,
    height: 300,
    mode: 'GRID',
    config: `{
  columns: [
    {
      type: 'gutter',
      gutterName: 'dirty'
    },
    {
      type: 'gutter',
      gutterName: 'sequence'
    },
    {
      type: 'gutter',
      gutterName: 'row-selector',
      multiple: true
    },
    {
      type: 'string',
      name: 'id',
      hidden: true
    },
    {
      type: 'string',
      name: 'name',
      header: 'name',
      record: {
        align: 'center',
        editable: true
      },
      sortable: true,
      width: 120
    },
    {
      type: 'string',
      name: 'description',
      header: 'description',
      record: {
        align: 'left',
        editable: true
      },
      width: 200
    },
    {
      type: 'boolean',
      name: 'active',
      header: 'active',
      record: {
        align: 'center',
        editable: true
      },
      sortable: true,
      width: 60
    },
    {
      type: 'datetime',
      name: 'updatedAt',
      header: 'updated at',
      record: {
        align: 'center'
      },
      width: 180
    },
    {
      type: 'datetime',
      name: 'createdAt',
      header: 'created at',
      record: {
        align: 'center'
      },
      width: 180
    }
  ],
  rows: {
    selectable: {
      multiple: true
    },
    handlers: {
      click: 'select-row-toggle'
    }
  },
  sorters: [
    {
      name: 'name',
      desc: true
    }
  ],
  pagination: {
    pages: [20, 30, 50, 100, 200]
  }
}`
  }
}
