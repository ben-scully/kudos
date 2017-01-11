var express = require('express');
var router = express.Router();

module.exports = db => {

  // Show one
  router.get('/:id', function(req, res, next) {
    console.log('GET /:id PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {
        console.log('GET /:id RAW:\n', data)

        var jsonObj = buildAllAwardsObj(data)
        console.log('GET /:id JSON:\n', jsonObj)

        res.render('event_show', jsonObj)
      })
      .catch( error => { console.log(error) })
  });


  var buildAllAwardsObj = data => {
    var location = data[0][0].location
    var locationId = data[0][0].locationId
    var date = data[0][0].date
    var weekId = data[0][0].weekId
    var awards = data[1]
    var nominations = data[2]
    var arr = []

    awards.map(award => {
      arr.push(award)
      award.nominations = []

      nominations.map(nomination => {
        if (award.id == nomination.awardId)
          award.nominations.push(nomination)
      })
    })

    return {
      location: location,
      locationId: locationId,
      date: date,
      weekId: weekId,
      awards: arr
    }
  }


  return router;
}
