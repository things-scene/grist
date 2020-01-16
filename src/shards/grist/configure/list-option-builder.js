export const buildListOptions = list => {
  var { fields = ['name', 'description', 'updatedAt'] } = list

  return {
    fields
  }
}
