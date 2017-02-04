
var winner_status = require('./helpers/winner_status')

function init() {
  console.log('Event_Award_Show: init')

  $(function() {
    winner_status()
  })
}

module.exports = init
