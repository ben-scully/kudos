var express = require('express');
var router = express.Router();
var db = require('../db/fridaymeetings');


// Show Awards by Location
router.get('/allawards', function(req, res, next) {
  console.log('Show Awards by Location', req.query)
  var filterObj = {
    'locationId': req.query.locationId,
    'weekId': req.query.weekId
  }
  // console.log('filterObj\n', filterObj)

  db.findFridayMeetingAllAwards(filterObj)
    .then( data => {
      console.log('GET show /fridaymeetings/allawards/?locationId=x&weekId=y\n', data)

      var jsonObj = buildJsonObj(data)
      console.log('jsonObj\n', jsonObj)

      res.render('fridaymeeting_allawards_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildJsonObj = data => {
  var awards = []

  data[0].map(award => {
    awards.push(award)
    award.nominations = []

    data[1].map(nomination => {
      if (award.awardId == nomination.awardId)
        award.nominations.push(nomination)
    })
  })

  return {
    awards: awards,
    location: awards[0].location,
    date: awards[0].date
  }
}


// Show Award by Id
router.get('/oneaward/:id', function(req, res, next) {
  console.log('Show Award by Id', req.params.id)
  var filterObj = { 'awardId': req.params.id }
  console.log('filterObj\n', filterObj)

  db.findFridayMeetingOneAward(filterObj)
    .then( data => {
      console.log('GET show /fridaymeetings/oneaward/:id\n', data)
      console.log('GET show /fridaymeetings/oneaward/:id\n', {
        award: data[0][0],
        nominations: data[1],
        location: data[0][0].location,
        date: data[0][0].date
      })

      res.render('fridaymeeting_oneaward_show', {
        award: data[0][0],
        nominations: data[1],
        location: data[0][0].location,
        date: data[0][0].date
      })
    })
    .catch( error => { console.log(error) })
});


// Show Award by Id
router.get('/onenomination/:id', function(req, res, next) {
  console.log('Show Nomination by Id', req.params.id)
  var filterObj = { 'nominationId': req.params.id }
  console.log('filterObj\n', filterObj)

  db.findFridayMeetingOneNomination(filterObj)
    .then( data => {
      console.log('GET show /fridaymeetings/onenomination/:id\n', data)
      console.log('GET show /fridaymeetings/onenomination/:id\n', data[0])

      res.render('fridaymeeting_onenomination_show', data[0])
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
