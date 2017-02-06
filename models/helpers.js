"use strict"

const buildEvent = data => {
  return {
    id: data.eventId,
    name: data.eventName,
    description: data.eventDescription,
    startDate: data.eventStartDate,
    endDate: data.eventEndDate,
    officeId: data.officeId,
    officeName: data.officeName,
  }
}

const buildAward = data => {
  return {
    eventId: data.eventId,
    id: data.awardId,
    awardcategoryId: data.awardcategoryId,
    awardcategoryName: data.awardcategoryName,
    awardcategoryDescription: data.awardcategoryDescription,
  }
}

const buildNomination = data => {
  return {
    awardId: data.awardId,
    id: data.nominationId,
    description: data.nominationDescription,
    winner: data.nominationWinner,
    staffId: data.staffId,
    staffName: data.staffName
  }
}

const buildMany = (data, builderOne) => {
  const original = data.map(one => builderOne(one))
  const filtered = []

  for (let n = 0; n < original.length; n++) {
    let bool = false

    for (let m = 0; m < filtered.length; m++) {
      if (original[n].id == filtered[m].id) {
        bool = true
        break
      }
    }

    if (bool || !original[n].id) continue
    filtered.push(original[n])
  }

  return filtered
}

const addAwardsToEvent = (event, awards) => {
  event.awards = awards ? awards : []
}

const addNominationsToAwards = (awards, nominations) => {
  awards.nominations = nominations ? nominations : []

  awards.map(award => {
    if (!award.nominations) award.nominations = []

    nominations.map(nom => {
      if (nom.awardId == award.id)
        award.nominations.push(nom)
    })
  })
}

module.exports = {
  buildEvent: buildEvent,
  buildAward: buildAward,
  buildNomination: buildNomination,
  buildMany: buildMany,
  addAwardsToEvent: addAwardsToEvent,
  addNominationsToAwards: addNominationsToAwards
}
