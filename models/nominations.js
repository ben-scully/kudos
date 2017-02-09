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
      return dbs.nominations.findById(id)
        .then( data => {
          console.log('Models - Nominations findById:\n', data)

          const event = buildEvent(data[0])
          const award = buildAward(data[0])
          const nominations = buildNomination(data[0])

          const nominationObj = {}
          nominationObj.event = event
          nominationObj.award = award
          nominationObj.nomination = nominations

          console.log('Models - Nominations findById: - nominationObj\n', nominationObj)
          return nominationObj
        })
        .catch( error => console.log(error) )
    }

  }
}
