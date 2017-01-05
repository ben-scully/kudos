var express = require('express');
var router = express.Router();
var db = require('../db/persons');


// Show All
router.get('/', function(req, res, next) {
  db.findAll()
    .then( data => {
      res.render('person_index', { list: data })
    })
    .catch( error => { console.log(error) })
});


// Show Create One
router.get('/new', function(req, res, next) {
  res.render('person_new')
});


// Show One
router.get('/:id', function(req, res, next) {
  db.findById(req.params.id)
    .then( data => {
      res.render('person_show', data[0])
    })
    .catch( error => { console.log(error) })
});


// Show Edit One
router.get('/:id/edit', function(req, res, next) {
  db.findById(req.params.id)
    .then( data => {
      res.render('person_edit', data[0])
    })
    .catch( error => { console.log(error) })
});


// Create One
router.post('/', function(req, res, next) {
  var createObj = {
    name: req.body.name
  }

  db.create(createObj)
    .then( data => {
      res.redirect('/persons')
    })
    .catch( error => { console.log(error) })
});


// Edit One
router.post('/:id/edit', function(req, res, next) {
  var updateObj = {
    id: req.params.id,
    name: req.body.name
  }

  db.update(updateObj)
    .then( data => {
      res.redirect('/persons')
    })
    .catch( error => { console.log(error) })
});


module.exports = router;