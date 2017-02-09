var knex = require('./knexMaster')

var events = require('./events')(knex)
var awards = require('./awards')(knex)
var nominations = require('./nominations')(knex)
var awardcategorys = require('./awardcategorys')(knex)

module.exports = {
  events: events,
  awards: awards,
  nominations: nominations,
  awardcategorys: awardcategorys
}
