var express = require('express');
var router = express.Router();
var db = require('../db/awards');


// Show All
router.get('/', function(req, res, next) {
  db.findAll()
    .then( data => {
      console.log('GET show ALL\n', data)
      res.render('award_index', { list: data })
    })
    .catch( error => { console.log(error) })
});


// Show Create One
router.get('/new', function(req, res, next) {
  db.findAllOptions()
    .then( data => {
      console.log('GET show create one\n', data)
      res.render('award_new', {
        locations: data[0],
        awardcategorys: data[1]
      })
    })
});


// Show One
router.get('/:id', function(req, res, next) {
  db.findById(req.params.id)
    .then( data => {
      console.log('GET show :id\n', data)
      console.log('GET show :id\n', {
        award: data[0][0],
        persons: data[1]
      })
      res.render('award_show', {
        award: data[0][0],
        persons: data[1]
      })
    })
    .catch( error => { console.log(error) })
});


// Show Edit One
router.get('/:id/edit', function(req, res, next) {
  db.findByIdPlusOptions(req.params.id)
    .then( data => {
      console.log('GET :id edit\n', data)
      res.render('award_edit', {
        award: data[0][0],
        locations: data[1],
        awardcategorys: data[2]
      })
    })
    .catch( error => { console.log(error) })
});


// Create One
router.post('/', function(req, res, next) {
  var createObj = {
    locationId: req.body.locationId,
    awardcategoryId: req.body.awardcategoryId
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
    locationId: req.body.locationId,
    awardcategoryId: req.body.awardcategoryId
  }

  db.update(updateObj)
    .then( data => {
      res.redirect('/awards')
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
