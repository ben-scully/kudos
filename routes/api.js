var express = require('express');
var router = express.Router();

module.exports = dbs => {


  router.get('/locations', function(req, res, next) {
    console.log('GET /api/locations:\n')

    dbs.locations.findAll()
      .then( data => {

        console.log('GET /api/locations:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/persons', function(req, res, next) {
    console.log('GET /api/persons:\n')

    dbs.persons.findAll()
      .then( data => {

        console.log('GET /api/persons:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  router.get('/events', function(req, res, next) {
    console.log('GET /api/events QUERY:\n', req.query)

    dbs.events.findByLocationDate(req.query)
      .then( data => {

        console.log('GET /api/events:\n', data)

        res.json(data)
      })
      .catch( error => console.log(error) )
  })


  return router
}
