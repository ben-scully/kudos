
var initEventSearch = require('./helpers/event_search')
var initNominationNewForm = require('./helpers/nomination_new_form')


function init() {
  console.log('Homepage: init')

  $(function() {
    initNominationNewForm()
    initEventSearch()
  })
}


module.exports = init
