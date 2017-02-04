var express = require('express');
var router = express.Router();

module.exports = db => {

  // GET index
  router.get('/', function(req, res, next) {
    console.log('GET /')

    db.index()
      .then( data => {
        console.log('GET index\n')

        var titleObj = buildTitleObj(data)
        console.log('titleObj:\n', titleObj)

        res.render('homepage', { title: titleObj })
      })
      .catch( error => { console.log(error) })
  });

  return router;
}


var buildTitleObj = data => {
  // Under development
  return 'Kudos'
}
