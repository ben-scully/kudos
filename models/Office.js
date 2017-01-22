
module.exports = {

  oneModel: (id, name, description) => {
    return oneRecord(data)
  }

  manyModel: dataArr => {
    return dataArr.map(data => {
      oneRecord(data.id, data.name, data.description)
    })
  }

}

var onRecord = (id, name, description) => {
  return {
    id: id,
    name: name,
    description: description
  }
}
