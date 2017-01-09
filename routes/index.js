var express = require('express');
var router = express.Router();

var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])

var db = require('../db/indexs')(knex);

// GET index
router.get('/', function(req, res, next) {
  db.index()
    .then( data => {
      console.log('GET index\n')

      var fridaymeetingShowFormObj = buildFridaymeetingShowFormObj(data)
      console.log('fridaymeeting_show_formObj\n', fridaymeetingShowFormObj)

      var nominationNewFormObj = buildNominationNewFormObj(data)
      console.log('fridaymeeting_show_form\n', nominationNewFormObj)

      var nominationIndexTableObj = buildNominationIndexTableObj(data)
      console.log('nomination_index_table\n', nominationIndexTableObj)

      res.render('index', {
        title: 'Kudos',
        fridaymeeting_show_form: fridaymeetingShowFormObj,
        nomination_new_form: nominationNewFormObj,
        nomination_index_table: nominationIndexTableObj
      })
    })
    .catch( error => { console.log(error) })
});


module.exports = router;


var buildFridaymeetingShowFormObj = data => {
  var locations = []
  var weeks = []
  var awardcategorys = []
  var persons = []

  data[0].map(el => locations.push(el) )
  data[1].map(el => weeks.push(el) )
  data[2].map(el => awardcategorys.push(el) )
  data[3].map(el => persons.push(el) )

  return {
    locations: locations,
    weeks: weeks,
    awardcategorys: awardcategorys,
    persons: persons
  }
}


var buildNominationNewFormObj = data => {
  var locations = []
  var weeks = []
  var awardcategorys = []
  var persons = []

  data[0].map(el => locations.push(el) )
  data[1].map(el => weeks.push(el) )
  data[2].map(el => awardcategorys.push(el) )
  data[3].map(el => persons.push(el) )

  return {
    locations: locations,
    weeks: weeks,
    awardcategorys: awardcategorys,
    persons: persons
  }
}


var buildNominationIndexTableObj = data => {
  var locations = []
  var from = 'dummyFrom'
  var to = 'dummyTo'

  data[4].map(el => locations.push(el) )

  return {
    locations: locations,
    from: from,
    to: to
  }
}
