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
      return dbs.awards.findById(id)
        .then( data => {
          console.log('Models - Awards findById:\n', data)

          const event = buildEvent(data[0])
          const award = buildAward(data[0])
          const nominations = buildMany(data, buildNomination)

          const awardObj = {}
          awardObj.event = event
          awardObj.award = award
          addNominationsToAwards([awardObj.award], nominations)

          console.log('Models - Awards findById: - awardObj\n', awardObj)
          return awardObj
        })
        .catch( error => console.log(error) )
    }

  }
}
