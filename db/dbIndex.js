var knex = require('./knexMaster')

var offices = require('./offices')(knex)
var awardcategorys = require('./awardcategorys')(knex)
var staffs = require('./staffs')(knex)
var nominations = require('./nominations')(knex)
var awards = require('./awards')(knex)
var events = require('./events')(knex)
var homepage = require('./homepage')(knex)


module.exports = {
  offices: offices,
  awardcategorys: awardcategorys,
  staffs: staffs,
  nominations: nominations,
  awards: awards,
  events: events,
  homepage: homepage
}
