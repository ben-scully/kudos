var express = require('express');
var router = express.Router();

var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])

var db = require('../db/fridaymeetings')(knex);

// Show Awards by Location
router.get('/allawards', function(req, res, next) {
  console.log('Show Awards by Location [req.query]:\n', req.query)
  var filterObj = {
    'locationId': req.query.locationId,
    'weekId': req.query.weekId
  }

  db.findFridayMeetingAllAwards(filterObj)
    .then( data => {
      console.log('GET show /fridaymeetings/allawards/?locationId=x&weekId=y :\n', data)

      var jsonObj = buildJsonObj(data)

      res.render('fridaymeeting_allawards_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildJsonObj = data => {
  var location = data[0][0].location
  var date = data[0][0].date
  var awardcategorys = data[1]
  var nominations = data[2]
  var arr = []

  console.log('location:\n', location)
  console.log('date:\n', date)
  console.log('awardcategorys:\n', awardcategorys)
  console.log('nominations:\n', nominations)

  awardcategorys.map(category => {
    arr.push(category)
    category.nominations = []

    nominations.map(nomination => {
      if (category.awardcategoryId == nomination.awardcategoryId)
        category.nominations.push(nomination)
    })
  })

  return {
    location: location,
    date: date,
    awardcategorys: arr
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
