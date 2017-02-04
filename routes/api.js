var express = require('express');
var router = express.Router();


module.exports = dbs => {


  router.get('/offices', function(req, res, next) {
    console.log('GET /api/offices:\n')

    dbs.offices.findAll()
      .then( data => {

        console.log('GET /api/offices:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/staffs', function(req, res, next) {
    console.log('GET /api/staffs:\n')

    dbs.staffs.findAll()
      .then( data => {

        console.log('GET /api/staffs:\n', data[0], '\n', data[1], '\n........' + data.length)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/events', function(req, res, next) {
    console.log('GET /api/events QUERY:\n', req.query)

    dbs.events.findByOfficeDate(req.query.officeId, req.query.date)
      .then( data => {

        console.log('GET /api/events:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/awardcategorys', function(req, res, next) {
    console.log('GET /api/awardcategorys QUERY:\n', req.query)

    dbs.awardcategorys.findByEventId(req.query.eventid)
      .then( data => {

        console.log('GET /api/awardcategorys:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/awards', function(req, res, next) {
    console.log('GET /api/awards QUERY:\n', req.query)

    dbs.awards.findByEventId(req.query.eventId)
      .then( data => {

        console.log('GET /api/awards:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.post('/winners', function(req, res, next) {
    console.log('POST /api/winners QUERY:\n', req.query)
    var id = req.query.nominationid

    dbs.nominations.findByIdBasic(id)
      .then(data => {
        return dbs.nominations.updateWinner({ id: id, winner: !data[0].winner })
      })
      .then(data => {
        console.log('POST /api/winners:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  return router
}
