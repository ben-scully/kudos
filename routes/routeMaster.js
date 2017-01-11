var dbs = require('../db/dbMaster')

var locations = require('./locations')(dbs.locations)
var awardcategorys = require('./awardcategorys')(dbs.awardcategorys)
var persons = require('./persons')(dbs.persons)
var nominations = require('./nominations')(dbs.nominations)
var awards = require('./awards')(dbs.awards)
var events = require('./events')(dbs.events)
var indexs = require('./indexs')(dbs.indexs)
var api = require('./api')(dbs)


module.exports = app => {

  app.use('/locations', locations)
  app.use('/awardcategorys', awardcategorys)
  app.use('/persons', persons)
  app.use('/nominations', nominations)
  app.use('/awards', awards)
  app.use('/events', events)
  app.use('/', indexs)
  app.use('/api', api)

}
