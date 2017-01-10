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

        var fridaymeetingShowFormObj = buildFridaymeetingShowFormObj(data)
        console.log('fridaymeeting_show_formObj:\n', fridaymeetingShowFormObj)

        var nominationNewFormObj = buildNominationNewFormObj(data)
        console.log('fridaymeeting_show_form:\n', nominationNewFormObj)

        var leaderboardShowTableObj = buildLeaderboardShowTableObj(data)
        console.log('leaderboard_show_table:\n', leaderboardShowTableObj)

        res.render('index', {
          title: titleObj,
          fridaymeeting_show_form: fridaymeetingShowFormObj,
          nomination_new_form: nominationNewFormObj,
          leaderboard_show_table: leaderboardShowTableObj
        })
      })
      .catch( error => { console.log(error) })
  });

  return router;
}


var buildTitleObj = data => {
  // Under development
  return 'Kudos'
}


var buildFridaymeetingShowFormObj = data => {
  var locations = []
  var weeks = []
  var awards = []
  var persons = []

  data[0].map(el => locations.push(el) )
  data[1].map(el => weeks.push(el) )
  data[2].map(el => awards.push(el) )
  data[3].map(el => persons.push(el) )

  return {
    locations: locations,
    weeks: weeks,
    awards: awards,
    persons: persons
  }
}


var buildNominationNewFormObj = data => {
  var locations = []
  var weeks = []
  var awards = []
  var persons = []

  data[0].map(el => locations.push(el) )
  data[1].map(el => weeks.push(el) )
  data[2].map(el => awards.push(el) )
  data[3].map(el => persons.push(el) )

  return {
    locations: locations,
    weeks: weeks,
    awards: awards,
    persons: persons
  }
}


var buildLeaderboardShowTableObj = data => {
  var locations = []
  var from = 'dummyFrom'
  var to = 'dummyTo'

  data[4].map(location => locations.push(location) )

  return {
    locations: locations,
    from: from,
    to: to
  }
}
