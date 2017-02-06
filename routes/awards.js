var express = require('express');
var router = express.Router();

module.exports = db => {

  // Show All
  router.get('/', function(req, res, next) {
    db.findAll()
      .then( data => {
        res.render('office_index', { offices: data })
      })
      .catch( error => { console.log(error) })
  })


  // Show One
  router.get('/:id', function(req, res, next) {
    db.findById(req.params.id)
      .then( data => {
        res.render('office_show', data[0])
      })
      .catch( error => { console.log(error) })
  })


  return router;
}
