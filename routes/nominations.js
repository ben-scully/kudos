var express = require('express');
var router = express.Router();

module.exports = db => {

  // Show All
  router.get('/', function(req, res, next) {
    res.render('nomination_index')
  });


  // Show Create One
  router.get('/new', function(req, res, next) {
    db.findAllOptions()
      .then( data => {
        console.log('GET show new\n', data)
        res.render('nomination_new', {
          staffs: data[0],
          locations: data[1],
          awards: data[2]
        })
      })
      .catch( error => { console.log(error) })
  });


  // Show One
  router.get('/:id', function(req, res, next) {
    console.log('GET /:id PARAMS:\n', req.params)

    db.findById(req.params.id)
      .then( data => {

        console.log('GET :id :\n', data[0])

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
          staffs: data[1],
          awards: data[2]
        })
      })
      .catch( error => { console.log(error) })
  });


  // Create One
  router.post('/', function(req, res, next) {
    console.log("req.body", req.body)
    var createObj = {
      staffId: req.body.staffId,
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
      staffId: req.body.staffId,
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

  return router;
}



// Show Award by Id
router.get('/onenomination/:id', function(req, res, next) {
  console.log('GET /onenomination PARAMS:\n', req.params)

  db.findFridayMeetingOneNomination(req.params.id)
    .then( data => {
      console.log('GET /onenomination/:id RAW:\n', data)

      var jsonObj = buildOneNominationObj(data)
      console.log('GET /onenomination/:id JSON:\n', jsonObj)

      res.render('fridaymeeting_onenomination_show', jsonObj)
    })
    .catch( error => { console.log(error) })
});


var buildOneNominationObj = data => {
  var location = data[0].location
  var date = data[0].date
  var awardcategory = data[0].awardcategory
  var awardcategoryDescription = data[0].awardcategoryDescription
  var name = data[0].name
  var nominationDescription = data[0].nominationDescription
  var winner = data[0].winner

  return {
    location: location,
    date: date,
    awardcategory: awardcategory,
    awardcategoryDescription: awardcategoryDescription,
    name: name,
    nominationDescription: nominationDescription,
    winner: winner
  }
}

//
// // Edit Nomination by Id
// router.get('/onenomination/:id/edit', function(req, res, next) {
//   console.log('GET /onenomination/:id/edit PARAMS:\n', req.params)
//
//   db.findFridayMeetingOneNomination(req.params.id)
//     .then( data => {
//       console.log('GET /onenomination/:id/edit RAW:\n', data)
//
//       var jsonObj = buildOneNominationEditObj(data)
//       console.log('GET /onenomination/:id/edit JSON:\n', jsonObj)
//
//       res.render('fridaymeeting_onenomination_edit', jsonObj)
//     })
//     .catch( error => { console.log(error) })
// });
//
//
// var buildOneNominationEditObj = data => {
//   var location = data[0].location
//   var date = data[0].date
//   var awardcategory = data[0].awardcategory
//   var awardcategoryDescription = data[0].awardcategoryDescription
//   var name = data[0].name
//   var nominationDescription = data[0].nominationDescription
//   var winner = data[0].winner
//
//   return {
//     location: location,
//     date: date,
//     awardcategory: awardcategory,
//     awardcategoryDescription: awardcategoryDescription,
//     name: name,
//     nominationDescription: nominationDescription,
//     winner: winner,
//     staffs: staffs
//   }
// }
