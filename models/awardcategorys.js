"use strict"

const buildAwardcategory = data => {
  return {
    eventId: data.eventId,
    awardcategoryId: data.awardcategoryId,
    awardcategoryName: data.awardcategoryName,
    awardcategoryDescription: data.awardcategoryDescription
  }
}

const buildManyAwardcategorys = data => {
  return data.map(one => buildAwardcategory(one))
}

module.exports = dbs => {
  return {

    findByEventId: eventId => {
      return dbs.awardcategorys.findByEventId(eventId)
        .then( data => {
          console.log('Models - Awardcategorys findByEventId:\n', data)
          const dataObj = buildManyAwardcategorys(data)
          console.log('Models - Awardcategorys findByEventId: - dateObj\n', dataObj)
          return dataObj
        })
        .catch( error => console.log(error) )
    }

  }
}
