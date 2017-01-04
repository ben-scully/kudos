var express = require('express');
var router = express.Router();
var db = require('../db/fridaymeetings');


// Show Awards by Location
router.get('/location/:locationId', function(req, res, next) {
  console.log('Show Awards by Location', req.params.id)
  var filterObj = {
    'locationId': req.params.locationId,
    'weekId': req.params.weekId
  }
  console.log('filterObj\n', filterObj)

  db.findFridayMeetingAllAwards(filterObj)
    .then( data => {
      console.log('GET show /location/?locationId=x\n', data)

      var jsonObj = buildJsonObj(data)

      res.render('fridaymeeting_show', jsonObj)
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

  return { awards: awards }
}


// Show Award by Id
router.get('/award/:id', function(req, res, next) {
  console.log('Show Award by Id', req.params.id)
  var filterObj = { 'awardId': req.params.id }
  console.log('filterObj\n', filterObj)

  db.findFridayMeetingOneAward(filterObj)
    .then( data => {
      console.log('GET show /award/?awardId=x\n', data)
      console.log('GET show /award/?awardId=x\n', {
        award: data[0][0],
        nominations: data[1]
      })

      res.render('fridaymeeting_oneaward_show', {
        award: data[0][0],
        nominations: data[1]
      })
    })
    .catch( error => { console.log(error) })
});


// Show Award by Id
router.get('/nomination/:id', function(req, res, next) {
  console.log('Show Nomination by Id', req.params.id)
  var filterObj = { 'nominationId': req.params.id }
  console.log('filterObj\n', filterObj)

  db.findFridayMeetingOneNomination(filterObj)
    .then( data => {
      console.log('GET show /nomination/?nominationId=x\n', data)
      console.log('GET show /nomination/?nominationId=x\n', data[0])

      res.render('fridaymeeting_onenomination_show', data[0])
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
