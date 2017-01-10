var express = require('express');
var router = express.Router();

module.exports = db => {

  // Show All
  router.get('/', function(req, res, next) {
    res.render('award_index')
  });


  // Show Create One
  router.get('/new', function(req, res, next) {
    res.render('award_new')
  });


  // Show One
  router.get('/:id', function(req, res, next) {
    console.log('GET /:id PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {

        var jsonObj = buildAwardObj(data)
        console.log('GET /:id JSON:\n', jsonObj)

        res.render('award_show', jsonObj)
      })
      .catch( error => { console.log(error) })
  });


  var buildAwardObj = data => {
    var location = data[0][0].location
    var date = data[0][0].date
    var award = data[1][0]
    var nominations = data[2]

    return {
      location: location,
      date: date,
      award: award,
      nominations: nominations
    }
  }


  // Show Edit One
  router.get('/:id/edit', function(req, res, next) {
    db.findById(req.params.id)
      .then( data => {
        res.render('award_edit', data[0])
      })
      .catch( error => { console.log(error) })
  });


  // Create One
  router.post('/', function(req, res, next) {
    var createObj = {
      name: req.body.name,
      description: req.body.description
    }

    db.create(createObj)
      .then( data => {
        res.redirect('/awards')
      })
      .catch( error => { console.log(error) })
  });


  // Edit One
  router.post('/:id/edit', function(req, res, next) {
    var updateObj = {
      id: req.params.id,
      name: req.body.name,
      description: req.body.description
    }

    db.update(updateObj)
      .then( data => {
        res.redirect('/awards')
      })
      .catch( error => { console.log(error) })
  });

  return router;
}
