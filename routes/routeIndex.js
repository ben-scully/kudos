var dbs = require('../db/dbIndex')


var api = require('./api')(dbs)
var homepage = require('./homepage')(dbs.homepage)
var events = require('./events')(dbs.events)
var nominations = require('./nominations')(dbs.nominations)
var offices = require('./offices')(dbs.offices)
var awardcategorys = require('./awardcategorys')(dbs.awardcategorys)
var staffs = require('./staffs')(dbs.staffs)


module.exports = app => {

  app.use('/api', api)
  app.use('/', homepage)
  app.use('/events', events)
  app.use('/nominations', nominations)
  app.use('/offices', offices)
  app.use('/awardcategorys', awardcategorys)
  app.use('/staffs', staffs)

}
