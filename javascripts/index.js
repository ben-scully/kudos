// Page specific
var homepage = require('./homepage')

var event_show = require('./event_show')
var event_new = require('./event_new')
var event_edit = require('./event_edit')

var event_award_show = require('./event_award_show')

var event_award_nomination_show = require('./event_award_nomination_show')
var event_award_nomination_new = require('./event_award_nomination_new')
var event_award_nomination_edit = require('./event_award_nomination_edit')

// Helpers
var winner_status = require('./helpers/winner_status')
var formatdate = require('./helpers/formatdate')

// Page specific
window.custom = {}
window.custom.homepage = homepage

window.custom.event_show = event_show
window.custom.event_edit = event_edit

window.custom.event_award_show = event_award_show

window.custom.event_award_nomination_show = event_award_nomination_show
window.custom.event_award_nomination_new = event_award_nomination_new
window.custom.event_award_nomination_edit = event_award_nomination_edit


// Helpers
window.custom.winner_status = winner_status
window.custom.formatdate = formatdate
