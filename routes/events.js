var express = require('express')
var router = express.Router()
var model = require('../models/Event')


module.exports = db => {

  // Show new Event
  router.get('/new', (req, res, next) => {
    console.log('GET /new:\n')

    res.render('event_new')
  })


  // Show new Nomination -> Award -> Event
  router.get('/:id/awards/:awardid/nominations/new', (req, res, next) => {
    console.log('GET /:id/awards/:awardid/nominations/new PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id/awards/:awardid/nominations/new RAW:\n', data)

        var jsonObj = model.eventFilterByNominationId(data, req.params.awardid, req.params.nominationid)
        console.log('GET /:id/awards/:awardid/nominations/new JSON:\n', jsonObj)

        res.render('event_award_nomination_new', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Show edit Nomination -> Award -> Event
  router.get('/:id/awards/:awardid/nominations/:nominationid/edit', (req, res, next) => {
    console.log('GET /:id/awards/:awardid/nominations/:nominationid/edit PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id/awards/:awardid/nominations/:nominationid/edit RAW:\n', data)

        var jsonObj = model.eventFilterByNominationId(data, req.params.awardid, req.params.nominationid)
        console.log('GET /:id/awards/:awardid/nominations/:nominationid/edit JSON:\n', jsonObj)

        res.render('event_award_nomination_edit', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Show edit Event
  router.get('/:id/edit', (req, res, next) => {
    console.log('GET /:id/edit PARAMS:\n', req.params)

    db.findByIdEdit(req.params.id)
      .then( data => {
        console.log('GET /:id/edit RAW:\n', data)

        var jsonObj = model.eventEdit(data)
        console.log('GET /:id/edit JSON:\n', jsonObj)

        res.render('event_edit', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Show one
  router.get('/:id', (req, res, next) => {
    console.log('GET /:id PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id RAW:\n', data)

        var jsonObj = model.event(data)
        console.log('GET /:id JSON:\n', jsonObj)

        res.render('event_show', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Show one Award -> Event
  router.get('/:id/awards/:awardid', (req, res, next) => {
    console.log('GET /:id/awards/:awardid PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id/awards/:awardid RAW:\n', data)

        var jsonObj = model.eventFilterByAwardId(data, req.params.awardid)
        console.log('GET /:id/awards/:awardid JSON:\n', jsonObj)

        res.render('event_award_show', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Show one Nomination -> Award -> Event
  router.get('/:id/awards/:awardid/nominations/:nominationid', (req, res, next) => {
    console.log('GET /:id/awards/:awardid/nominations/:nominationid PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id/awards/:awardid/nominations/:nominationid RAW:\n', data)

        var jsonObj = model.eventFilterByNominationId(data, req.params.awardid, req.params.nominationid)
        console.log('GET /:id/awards/:awardid/nominations/:nominationid:\n', jsonObj)

        res.render('event_award_nomination_show', jsonObj)
      })
      .catch( error => { console.log(error) })
  })


  // Create one
  router.post('/:id', (req, res, next) => {
    console.log('POST /:id BODY:\n', req.body)
    console.log('POST /:id PARAM:\n', req.params)

    var updateObj = {
      id: req.params.id,
      name: req.body.eventName,
      description: req.body.eventDescription,
      startdate: req.body.eventStartdate,
      enddate: req.body.eventEnddate,
      officeId: req.body.eventOfficeId
    }
    console.log('POST /:id UPDATEOBJ:\n', updateObj)

    db.update(updateObj)
      .then( data => {
        console.log('POST /:id RAW:\n', data)

        res.redirect('/events/' + req.params.id)
      })
      .catch( error => { console.log(error) })
  })


  // Create new Nomination -> Award -> Event
  router.post('/:id/awards/:awardid/nominations', (req, res, next) =>{
    console.log('POST /:id/awards/:awardid/nominations PARAMS:\n', req.params)
    console.log('POST /:id/awards/:awardid/nominations BODY:\n', req.body)

    var createObj = {
      awardId: req.params.awardid,
      staffId: req.body.nominationStaffId,
      description: req.body.nominationDescription,
      winner: false
    }

    db.createNomination(createObj)
      .then( data => {
        console.log('POST /:id/awards/:awardid/nominations RAW:\n', data)

        var jsonObj = model.eventFilterByNominationId(data, req.params.awardid, req.params.nominationid)
        console.log('GET /:id/awards/:awardid/nominations/new JSON:\n', jsonObj)

        var url = '/events/' + req.params.id + '/awards/' + req.params.awardid
        res.redirect(url)
      })
      .catch( error => { console.log(error) })
  })


  // Post edit Nomination -> Award -> Event
  router.post('/:id/awards/:awardid/nominations/:nominationid', (req, res, next) =>{
    console.log('POST /:id/awards/:awardid/nominations/:nominationid PARAMS:\n', req.params)
    console.log('POST /:id/awards/:awardid/nominations/:nominationid BODY:\n', req.body)

    var updateObj = {
      id: req.params.nominationid,
      awardId: req.body.nominationAwardId,
      staffId: req.body.nominationStaffId,
      description: req.body.nominationDescription
    }

    db.updateNomination(updateObj)
      .then( data => {
        console.log('POST /:id/awards/:awardid/nominations/:nominationid RAW:\n', data)

        // var jsonObj = model.eventFilterByNominationId(data, req.params.awardid, req.params.nominationid)
        // console.log('GET /:id/awards/:awardid/nominations/:nominationid JSON:\n', jsonObj)

        var url = '/events/' + req.params.id + '/awards/' + req.params.awardid + '/nominations/' + req.params.nominationid
        res.redirect(url)
      })
      .catch( error => { console.log(error) })
  })

  return router;
}
