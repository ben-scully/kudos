
module.exports = {

  oneModel: (id, event, awardcategory, nominations) => {
    return oneRecord(event, awardcategory, nominations)
  }

  manyModel: dataArr => {
    return dataArr.map(data => {
      oneRecord(data.id, data.event, data.awardcategory, data.nominations)
    })
  }

}

var oneRecord = (id, event, awardcategory, nominations) => {
  return {
    id: id,
    event: event,
    awardcategory: awardcategory
    nominations: nominations
  }
}
