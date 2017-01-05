var express = require('express');
var router = express.Router();
var db = require('../db/nominations');


// GET index
router.get('/', function(req, res, next) {
  db.nominationForm()
    .then( data => {
      console.log('GET index\n', data)
      res.render('index', {
        title: 'Kudos',
        persons: data[0],
        locations: data[1],
        weeks: data[2],
        awards: data[3]
      })
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
