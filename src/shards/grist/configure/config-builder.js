import { buildColumn } from './column-builder'
import { buildRowsOptions } from './rows-option-builder'
import { buildListOptions } from './list-option-builder'
import { buildGridOptions } from './grid-option-builder'
import { buildRecordViewOptions } from './record-view-option-builder'
import { buildImexOptions } from './imex-option-builder'

export const buildConfig = config => {
  var { columns = [], rows = {}, pagination = {}, list = {}, grid = {}, recordView = {}, imex = {} } = config

  return {
    ...config,
    columns: columns.map(column => buildColumn(column)),
    rows: buildRowsOptions(rows),
    pagination,
    list: buildListOptions(list),
    grid: buildGridOptions(grid),
    recordView: buildRecordViewOptions(recordView),
    imex: buildImexOptions(imex)
  }
}
