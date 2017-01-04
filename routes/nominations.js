var express = require('express');
var router = express.Router();
var db = require('../db/nominations');


// Show All
router.get('/', function(req, res, next) {
  db.findAll()
    .then( data => {
      console.log('GET index\n', data)
      res.render('nomination_index', { list: data })
    })
    .catch( error => { console.log(error) })
});


// Show Create One
router.get('/new', function(req, res, next) {
  db.findAllOptions()
    .then( data => {
      console.log('GET show new\n', data)
      res.render('nomination_new', {
        persons: data[0],
        locations: data[1],
        awards: data[2]
      })
    })
    .catch( error => { console.log(error) })
});


// Show One
router.get('/:id', function(req, res, next) {
  db.findById(req.params.id)
    .then( data => {
      console.log('GET :id show\n', data)
      res.render('nomination_show', data[0])
    })
    .catch( error => { console.log(error) })
});


// Show Edit One
router.get('/:id/edit', function(req, res, next) {
  db.findByIdPlusOptions(req.params.id)
    .then( data => {
      console.log('GET :id edit\n', data)

      res.render('nomination_edit', {
        nomination: data[0][0],
        persons: data[1],
        awards: data[2]
      })
    })
    .catch( error => { console.log(error) })
});


// Create One
router.post('/', function(req, res, next) {
  console.log("req.body", req.body)
  var createObj = {
    personId: req.body.personId,
    awardId: req.body.awardId,
    description: req.body.description
  }

  db.create(createObj)
    .then( data => {
      console.log('POST new', data)
      res.redirect('/nominations')
    })
    .catch( error => { console.log(error) })
});


// Edit One
router.post('/:id/edit', function(req, res, next) {
  var updateObj = {
    id: req.params.id,
    personId: req.body.personId,
    awardId: req.body.awardId,
    description: req.body.description
  }

  db.update(updateObj)
    .then( data => {
      console.log('POST :id edit\n', data)
      res.redirect('/nominations')
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
