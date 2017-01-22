var dbs = require('../db/dbIndex')

var offices = require('./offices')(dbs.offices)
var awardcategorys = require('./awardcategorys')(dbs.awardcategorys)
var staffs = require('./staffs')(dbs.staffs)
var nominations = require('./nominations')(dbs.nominations)
var awards = require('./awards')(dbs.awards)
var events = require('./events')(dbs.events)
var homepage = require('./homepage')(dbs.homepage)
var api = require('./api')(dbs)


module.exports = app => {

  app.use('/offices', offices)
  app.use('/awardcategorys', awardcategorys)
  app.use('/staffs', staffs)
  app.use('/nominations', nominations)
  app.use('/awards', awards)
  app.use('/events', events)
  app.use('/', homepage)
  app.use('/api', api)

}
