var express = require('express');
var router = express.Router();
var db = require('../db/admins');


// Show All
router.get('/', function(req, res, next) {
  db.findAll()
    .then( data => {
      console.log('GET index\n', data)

      res.render('admin_index', {
        locations: data[0],
        awardcategorys: data[1],
        persons: data[2]
      })
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
