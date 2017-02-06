"use strict"

var dbs = require('../dbs/dbIndex')

var events = require('./events')(dbs)
var awards = require('./awards')(dbs)
var nominations = require('./nominations')(dbs)

module.exports = {
  events: events,
  awards: awards,
  nominations: nominations
}
