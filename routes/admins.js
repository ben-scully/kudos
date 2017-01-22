var express = require('express');
var router = express.Router();

module.exports = db => {

  // Show All
  router.get('/', function(req, res, next) {
    db.findAll()
      .then( data => {
        console.log('GET index\n', data)

        res.render('admin_index', {
          offices: data[0],
          awardcategorys: data[1],
          staffs: data[2]
        })
      })
      .catch( error => console.log(error))
  });

  return router;
}
