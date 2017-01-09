var express = require('express');
var router = express.Router();

var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])

var db = require('../db/fridaymeetings')(knex);


// Show Awards by Location
router.get('/allawards', function(req, res, next) {
  console.log('GET /allawards QUERY:\n', req.query)

  var filterObj = {
    'locationId': req.query.locationId,
    'weekId': req.query.weekId
  }

  db.findFridayMeetingAllAwards(filterObj)
    .then( data => {
      console.log('GET /allawards RAW:\n', data)

      var jsonObj = buildAllAwardsObj(data)
      console.log('GET /allawards JSON:\n', jsonObj)

      res.render('fridaymeeting_allawards_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildAllAwardsObj = data => {
  var location = data[0][0].location
  var date = data[0][0].date
  var awardcategorys = data[1]
  var nominations = data[2]
  var arr = []

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
router.get('/oneaward', function(req, res, next) {
  console.log('GET /oneaward QUERY:\n', req.query)

  var filterObj = {
    locationId: req.query.locationId,
    weekId: req.query.weekId,
    awardcategoryId: req.query.awardcategoryId
  }

  db.findFridayMeetingOneAward(filterObj)
    .then( data => {
      console.log('GET /oneaward RAW:\n', data)

      var jsonObj = buildOneAwardObj(data)
      console.log('GET /oneaward JSON:\n', jsonObj)

      res.render('fridaymeeting_oneaward_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildOneAwardObj = data => {
  var location = data[0][0].location
  var date = data[0][0].date
  var awardcategory = data[1][0]
  var nominations = data[2]

  return {
    location: location,
    date: date,
    awardcategory: awardcategory,
    nominations: nominations
  }
}


// Show Award by Id
router.get('/onenomination/:id', function(req, res, next) {
  console.log('GET /onenomination PARAMS:\n', req.params)

  db.findFridayMeetingOneNomination(req.params.id)
    .then( data => {
      console.log('GET /onenomination/:id RAW:\n', data)

      var jsonObj = buildOneNominationObj(data)
      console.log('GET /onenomination/:id JSON:\n', jsonObj)

      res.render('fridaymeeting_onenomination_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildOneNominationObj = data => {
  var location = data[0].location
  var date = data[0].date
  var awardcategory = data[0].awardcategory
  var awardcategoryDescription = data[0].awardcategoryDescription
  var name = data[0].name
  var nominationDescription = data[0].nominationDescription
  var winner = data[0].winner

  return {
    location: location,
    date: date,
    awardcategory: awardcategory,
    awardcategoryDescription: awardcategoryDescription,
    name: name,
    nominationDescription: nominationDescription,
    winner: winner
  }
}


module.exports = router;
