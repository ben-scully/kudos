
var express = require('express');
var router = express.Router();


module.exports = db => {

  // Create One
  router.post('/', function(req, res, next) {
    console.log('POST /nominations/:id BODY:\n', req.body)

    var createObj = {
      awardId: req.body.awardId,
      staffId: req.body.staffId,
      description: req.body.description
    }

    console.log('POST /nominations/:id createObj:\n', createObj)

    db.create(createObj)
      .then( data => {

        console.log('POST /nominations/:id create RAW:\n', data)
        var redirectUrl = '/events/' + req.body.eventId + '/awards/' + req.body.awardId
        console.log('RedirectUrl:', redirectUrl)
        
        res.redirect(redirectUrl)
      })
      .catch( error => { console.log(error) })
  });


  return router;
}
