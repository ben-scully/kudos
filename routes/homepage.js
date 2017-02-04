var express = require('express');
var router = express.Router();

module.exports = db => {

  // GET index
  router.get('/', function(req, res, next) {
    console.log('GET /')

    res.render('homepage', { title: 'Kudos' })
  });

  return router;
}
