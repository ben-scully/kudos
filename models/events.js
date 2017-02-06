"use strict"

var help = require('./helpers')

const buildEvent = help.buildEvent
const buildAward = help.buildAward
const buildNomination = help.buildNomination
const buildMany = help.buildMany
const addAwardsToEvent = help.addAwardsToEvent
const addNominationsToAwards = help.addNominationsToAwards


module.exports = dbs => {
  return {

    findById: id => {
      return dbs.events.findById(id)
        .then( data => {
          console.log('Models - Events findById:\n', data)

          const event = buildEvent(data[0])
          const awards = buildMany(data, buildAward)
          const nominations = buildMany(data, buildNomination)

          const eventObj = {}
          eventObj.event = event
          addAwardsToEvent(eventObj.event, awards)
          addNominationsToAwards(eventObj.event.awards, nominations)

          console.log('Models - Events findById: - eventObj\n', eventObj)
          return eventObj
        })
        .catch( error => console.log(error) )
    }

  }
}
