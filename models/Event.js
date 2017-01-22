
module.exports = {

  event: data => {

    // Build collections
    var event = eventInfo(data[0])
    var awards = awardsInfo(data)
    var nominations = nominationsInfo(data)

    // Add Nominations to Awards
    var awardsInclNominations = addNominationsToAwards(awards, nominations)

    // Add Awards to Event
    event.eventAwards = awardsInclNominations

    // Return complete Event object
    return event
  },

  eventFilterByAwardId: (data, awardid) => {

    // Build collections
    var event = eventInfo(data[0])
    var awards = awardsInfo(data)
    var awards = awards.filter(award => award.awardId == awardid)
    var nominations = nominationsInfo(data)

    // Add Nominations to Awards
    var awardsInclNominations = addNominationsToAwards(awards, nominations)

    // Add Award to Event
    event.eventAwards = awardsInclNominations

    // Return complete Event object
    return event
  },

  eventFilterByNominationId: (data, awardid, nominationid) => {

    // Build collections
    var event = eventInfo(data[0])
    var awards = awardsInfo(data)
    var awards = awards.filter(award => award.awardId == awardid)
    var nominations = nominationsInfo(data)
    var nominations = nominations.filter(nomination => nomination.nominationId == nominationid)

    // Add Nominations to Awards
    var awardsInclNominations = addNominationsToAwards(awards, nominations)

    // Add Award to Event
    event.eventAwards = awardsInclNominations

    // Return complete Event object
    return event
  },


  eventEdit: data => {

    // Build collections
    var event = eventInfo(data[0])
    var awardcategoryOptions = awardcategoryOptionsInfo(data)

    // Add Award to Event
    event.eventAwardcategoryOptions = awardcategoryOptions

    return event
  }


}


function eventInfo(data) {
  return {
    eventId: data.eventId,
    eventName: data.eventName,
    eventDescription: data.eventDescription,
    eventStartdate: data.eventStartdate,
    eventEnddate: data.eventEnddate,
    eventOfficeId: data.eventOfficeId,
    eventOfficeName: data.eventOfficeName
  }
}


function awardsInfo(data) {
  var awards = []

  for (var k in data) {
    if (awardIncludes(awards, data[k].awardId))
      continue

    awards.push({
      awardId: data[k].awardId,
      awardcategoryId: data[k].awardcategoryId,
      awardcategoryName: data[k].awardcategoryName,
      awardcategoryDescription: data[k].awardcategoryDescription
    })
  }

  return awards
}


function awardIncludes(arr, id) {
  for (var n in arr)
    if (arr[n].awardId == id)
      return true
  return false
}


function nominationsInfo(data) {
  var nominations = []

  for (var k in data) {
    if (nominationIncludes(nominations, data[k].nominationId))
      continue

    nominations.push({
      awardId: data[k].awardId,
      nominationId: data[k].nominationId,
      nominationDescription: data[k].nominationDescription,
      nominationWinner: data[k].nominationWinner,
      staffId: data[k].staffId,
      staffName: data[k].staffName
    })
  }

  return nominations
}


function nominationIncludes(arr, id) {
  for (var n in arr)
    if (arr[n].nominationId == id)
      return true
  return false
}


function addNominationsToAwards(awards, nominations) {
  var clonedAwards = JSON.parse(JSON.stringify(awards))

  clonedAwards.map(award => {
    award.awardNominations = []

    nominations.map(nomination => {

      if (award.awardId == nomination.awardId)
        award.awardNominations.push(nomination)
    })
  })

  return clonedAwards
}


function awardcategoryOptionsInfo(data) {
  var categorys = []

  for (var k in data) {
    if (categoryIncludes(categorys, data[k].awardcategoryId))
      continue

    categorys.push({
      eventId: data[k].eventId,
      awardcategoryId: data[k].awardcategoryId,
      awardcategoryName: data[k].awardcategoryName,
      awardcategoryDescription: data[k].awardcategoryDescription
    })
  }

  return categorys
}


function categoryIncludes(arr, id) {
  for (var n in arr)
    if (arr[n].awardcategoryId == id)
      return true
  return false
}
