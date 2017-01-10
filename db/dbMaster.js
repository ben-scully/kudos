var knex = require('./knexMaster')

var locations = require('./locations')(knex)
var awardcategorys = require('./awardcategorys')(knex)
var persons = require('./persons')(knex)
var nominations = require('./nominations')(knex)
var awards = require('./awards')(knex)
var fridaymeetings = require('./fridaymeetings')(knex)
var indexs = require('./indexs')(knex)

module.exports = {
  locations: locations,
  awardcategorys: awardcategorys,
  persons: persons,
  nominations: nominations,
  awards: awards,
  fridaymeetings: fridaymeetings,
  indexs: indexs
}
