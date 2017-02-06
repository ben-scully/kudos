"use strict"

var express = require('express');
var router = express.Router();

module.exports = models => {

  router.get('/events', function(req, res, next) {
    console.log('GET /api/events?query=xxx QUERY:\n', req.query)

    if (req.query.eventId) {

      models.events.findById(req.query.eventId)
        .then( data => {
          console.log('GET /api/events?eventId=xxx:\n', data)
          res.json(data)
        })
        .catch( error => console.log(error) )

    } else {
      console.log('GET /api/events?????\n', 'ERROR. Passed an invalid url query.')
    }

  })

  router.get('/awards', function(req, res, next) {
    console.log('GET /api/awards QUERY:\n', req.query)

    if (req.query.awardId) {

      models.awards.findById(req.query.awardId)
        .then( data => {
          console.log('GET /api/awards?awardId=xxx:\n', data)
          res.json(data)
        })
        .catch( error => console.log(error) )

    } else {
      console.log('GET /api/awards?????\n', 'ERROR. Passed an invalid url query.')
    }

  })

  router.get('/nominations', function(req, res, next) {
    console.log('GET /api/nominations QUERY:\n', req.query)

    if (req.query.nominationId) {

      models.nominations.findById(req.query.nominationId)
        .then( data => {
          console.log('GET /api/nominations?nominationId=xxx:\n', data)
          res.json(data)
        })
        .catch( error => console.log(error) )

    } else {
      console.log('GET /api/nominations?????\n', 'ERROR. Passed an invalid url query.')
    }

  })

  return router
}
