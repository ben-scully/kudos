var express = require('express');
var router = express.Router();
var db = require('../db/nominations');


// Show all Winning Nominations
router.get('/', function(req, res, next) {
  var filterObj = { 'nominations.winner': true }

  db.findAllByFilter(filterObj)
    .then( data => {
      console.log('GET index\n', data)
      res.render('winner_index', { list: data })
    })
    .catch( error => { console.log(error) })
});


// Show Winning Nominations by AwardId
router.get('/:id', function(req, res, next) {
  var filterObj = {
    'nominations.winner': true,
    'nominations.awardId': req.params.id
  }

  db.findByFilter(filterObj)
    .then( data => {
      console.log('GET :id\n', data)
      res.render('winner_index', { list: data })
    })
    .catch( error => { console.log(error) })
});


// Choose Winner by Id
router.post('/:id/choose', function(req, res, next) {
  console.log('POST :id choose')

  var updateObj = {
    id: req.params.id,
    winner: true
  }

  console.log('POST :id choose\n', updateObj)

  db.updateWinner(updateObj)
    .then( data => {
      console.log('POST :id choose\n', data)
      res.redirect('/nominations')
    })
    .catch( error => { console.log(error) })
});


// Unchoose Winner by Id
router.post('/:id/unchoose', function(req, res, next) {
  var updateObj = {
    id: req.params.id,
    winner: false
  }

  db.updateWinner(updateObj)
    .then( data => {
      console.log('POST :id unchoose\n', data)
      res.redirect('/nominations')
    })
    .catch( error => { console.log(error) })
});


module.exports = router;
