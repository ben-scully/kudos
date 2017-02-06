var express = require('express')
var router = express.Router()


module.exports = model => {

  // Show one
  router.get('/:id', (req, res, next) => {
    console.log('GET /:id PARAMS:\n', req.params)

    model.findById(req.params.id)
      .then( data => {
        console.log('GET /:id RAW:\n', data)
        res.render('event_show', data)
      })
      .catch( error => { console.log(error) })
  })

  return router;
}
