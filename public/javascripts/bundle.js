(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var winner_status = require('./helpers/winner_status')

function init() {
  console.log('Event_Award_Nomination_Edit: init')

  winner_status()
}

module.exports = init

},{"./helpers/winner_status":11}],2:[function(require,module,exports){

var winner_status = require('./helpers/winner_status')

function init() {
  console.log('Event_Award_Nomination_New: init')

  winner_status()
}

module.exports = init

},{"./helpers/winner_status":11}],3:[function(require,module,exports){

var winner_status = require('./helpers/winner_status')

function init() {
  console.log('Event_Award_Nomination_Show: init')

  winner_status()
}

module.exports = init

},{"./helpers/winner_status":11}],4:[function(require,module,exports){

var winner_status = require('./helpers/winner_status')

function init() {
  console.log('Event_Award_Show: init')

  $(function() {
    winner_status()
  })
}

module.exports = init

},{"./helpers/winner_status":11}],5:[function(require,module,exports){

module.exports = test


var test = () => {
  console.log('Hello... event_edit')
}

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){

function init() {
  console.log('Event_Show: init')
  $('.award .deselect').hide()

  $('.award .select-award').on('click', function() {
    $(this).siblings('.deselect').show()
    $(this).hide()
    showOnlyOne($('.award'), $(this).closest('.award').attr("data-id"))
  })

  $('.award .deselect-award').on('click', function() {
    $('.award .select').show()
    $('.award .deselect').hide()
    showAll($('.nomination'))
    showAll($('.award'))
  })

  $('.nomination .select-nomination').on('click', function() {
    $(this).closest('.award').find('.deselect').show()
    $(this).closest('.award').find('.select').hide()
    showOnlyOne($('.award'), $(this).closest('.award').attr("data-id"))
    showOnlyOne($('.nomination'), $(this).closest('.nomination').attr("data-id"))
  })

  $('.nomination .deselect-nomination').on('click', function() {
    $(this).closest('.award').find('.nomination').find('.select').show()
    $(this).closest('.award').find('.nomination').find('.deselect').hide()
    showAll($(this).closest('.award').find('.nomination'))
  })

  $('#addAwardModal').on('show.bs.modal', function (event) {

    var modal = $(this)
    var button = $(event.relatedTarget)
    var event = button.closest('.event')
    var eventId = event.attr('data-id')
    var url = '/api/awardcategorys?eventId=' + eventId
    var select = $('#addAwardModal-awardcategory').select()

    $.get(url, function(results) {
      console.log(results)

      $.each(results, function(key, value) {
        select.append($("<option></option>")
          .attr("value", value.awardcategoryId)
          .text(value.awardcategoryName + ' - ' + value.awardcategoryDescription));
      });
    })

    $('#addAwardModal-submit').on('click', function() {
      var awardInfo = {
        eventId: eventId,
        awardcategoryId: select.val()
      }

      console.log('aawardInfo:\n', awardInfo)

      $.post('/api/awards', awardInfo, function(aa) {
        console.log('aaa', aa)
      })
    })

  })
}

function showOnlyOne(items, id) {
  items.each(function(index) {
    if ($(this).attr("data-id") == id)
      $(this).show()
    else
      $(this).hide()
  })
}

function showAll(items) {
  items.each(function(index) {
    $(this).show()
  })
}

module.exports = init

},{}],8:[function(require,module,exports){


function init() {
  console.log('event_search: init...')

  initEventSearchOffice()
  initEventSearchDate()
  initEventSearchEvent()
}



/**************************
          OFFICE
/**************************/
function initEventSearchOffice() {
  populateEventSearchOffice()
  addListenerEventSearchOffice()
}

function populateEventSearchOffice() {
  $.get( "/api/offices", function (data) {
    var results = data.map(function(item) {
      return { id:item.id, text: item.name }
    })

    console.log('Results Offices: >', results)

    var limit = results.length > 3 ? 3 : results.length
    for (var i = 0; i < limit; i++)
      console.log(results[i])

    $("#event_search-office").select2({
      data: results,
      allowClear: true
    })
  })
}

function addListenerEventSearchOffice() {
  $("#event_search-office").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
      disableClearEventSearchDate()
      disableClearEventSearchEvent()
      return
    }

    enableClearEventSearchDate()
    disableClearEventSearchEvent()
  })
}



/**************************
            DATE
/**************************/
function initEventSearchDate() {
  addListenerEventSearchDate()
}

function addListenerEventSearchDate() {
  $("#event_search-date").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
      disableClearEventSearchEvent()
      return
    }

    enableClearEventSearchEvent()
  })
}

function disableClearEventSearchDate() {
  $('#event_search-date').attr('disabled', true);
  $('#event_search-date').val('')
}

function enableClearEventSearchDate() {
  $('#event_search-date').attr('disabled', false);
  $('#event_search-date').val('')
}



/**************************
          EVENT
/**************************/
function initEventSearchEvent() {
  disableClearEventSearchEvent()
  addListenerEventSearchEvent()
}

function updateEventSearchEvent(officeId, date) {
  $.get( "/api/events", { officeId:officeId, date:date })
    .done(function (data) {
      var results =  data.map(function(item) {
        return {
          id: item.eventId,
          text: item.eventName + ': ' + window.custom.formatdate.medium(item.eventStartdate) + ' - ' + window.custom.formatdate.medium(item.eventEnddate) }
      })

      console.log('Results Events: >', results)

      var limit = results.length > 3 ? 3 : results.length
      for (var i = 0; i < limit; i++)
        console.log(results[i])

      $("#event_search-event").select2({
        data: results,
        allowClear: true
      })
    })
}

function addListenerEventSearchEvent() {
  $("#event_search-event").on('change', function() {
    var value = $(this).val()

    if (!value) {
      disableEventSearchSubmit()
      return
    }

    enableEventSearchSubmit()
  })
}

function disableClearEventSearchEvent() {
  $('#event_search-event').attr('disabled', true);
  $('#event_search-event').empty()
}

function enableClearEventSearchEvent() {
  $('#event_search-event').attr('disabled', false);
  $('#event_search-event')
    .empty()
    .append('<option selected="selected" value="-1">Select an Event</option>')

  var officeId = $('#event_search-office').val()
  var date = $('#event_search-date').val()
  updateEventSearchEvent(officeId, date)
}

function disableEventSearchSubmit() {
  $('#event_search-submit').attr('href', '');
}

function enableEventSearchSubmit() {
  var eventId = $('#event_search-event').val()
  var link = '/events/' + eventId
  $('#event_search-submit').attr('href', link);
}


module.exports = init

},{}],9:[function(require,module,exports){
var dateformat = require('dateformat')

function formatDateMedium(date) {
  return dateformat(date, 'mediumDate')
}

function formatDateLong(date) {
  return dateformat(date, 'longDate')
}

module.exports = {
  medium: formatDateMedium,
  long: formatDateLong
}

},{"dateformat":14}],10:[function(require,module,exports){


function init() {
  console.log('nomination_new_form: init...')

  initNominationNewFormOffice()
  initNominationNewFormDate()
  initNominationNewFormEvent()
  initNominationNewFormAward()
  initNominationNewFormStaff()
  initNominationNewFormDescription()
  initNominationNewFormSubmit()
}


/**************************
          OFFICE
/**************************/
function initNominationNewFormOffice() {
  populateNominationNewFormOffice()
  addListenerNominationNewFormOffice()
}

function populateNominationNewFormOffice() {
  $.get( "/api/offices", function (data) {
    var results = data.map(function(item) {
      return { id: item.id, text: item.name }
    })

    console.log('Results Offices: >', results)

    var limit = results.length > 3 ? 3 : results.length
    for (var i = 0; i < limit; i++)
      console.log(results[i])

    $("#nomination_new_form-office").select2({
      data: results,
      allowClear: true
    })
  })
}

function addListenerNominationNewFormOffice() {
  $("#nomination_new_form-office").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
      disableClearNominationNewFormDate()
      disableClearNominationNewFormEvent()
      disableClearNominationNewFormAward()
      disableClearNominationNewFormStaff()
      disableClearNominationNewFormDescription()
      disableNominationNewFormSubmit()
      return
    }

    enableClearNominationNewFormDate()
    disableClearNominationNewFormEvent()
    disableClearNominationNewFormAward()
    disableClearNominationNewFormStaff()
    disableClearNominationNewFormDescription()
    disableNominationNewFormSubmit()
  })
}


/**************************
            DATE
/**************************/
function initNominationNewFormDate() {
  addListenerNominationNewFormDate()
}

function addListenerNominationNewFormDate() {
  $("#nomination_new_form-date").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
      disableClearNominationNewFormEvent()
      disableClearNominationNewFormAward()
      disableClearNominationNewFormStaff()
      disableClearNominationNewFormDescription()
      disableNominationNewFormSubmit()
      return
    }

    enableClearNominationNewFormEvent()
    disableClearNominationNewFormAward()
    disableClearNominationNewFormStaff()
    disableClearNominationNewFormDescription()
    disableNominationNewFormSubmit()
  })
}

function disableClearNominationNewFormDate() {
  $('#nomination_new_form-date').attr('disabled', true);
  $('#nomination_new_form-date').val('')
}

function enableClearNominationNewFormDate() {
  $('#nomination_new_form-date').attr('disabled', false);
  $('#nomination_new_form-date').val('')
}


/**************************
          EVENT
/**************************/
function initNominationNewFormEvent() {
  disableClearNominationNewFormEvent()
  addListenerNominationNewFormEvent()
}

function updateNominationNewFormEvent(officeId, date) {
  $.get( "/api/events", { officeId: officeId, date: date })
    .done(function (data) {
      console.log('/api/events data: >', data)

      var results =  data.map(function(item) {
        return {
          id: item.eventId,
          text: item.eventName + ': ' + window.custom.formatdate.medium(item.eventStartdate) + ' - ' + window.custom.formatdate.medium(item.eventEnddate) }
      })

      console.log('Results Events: >', results)

      var limit = results.length > 3 ? 3 : results.length
      for (var i = 0; i < limit; i++)
        console.log(results[i])

      $("#nomination_new_form-event").select2({
        data: results,
        allowClear: true
      })
    })
}

function addListenerNominationNewFormEvent() {
  $("#nomination_new_form-event").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
      disableClearNominationNewFormAward()
      disableClearNominationNewFormStaff()
      disableClearNominationNewFormDescription()
      disableNominationNewFormSubmit()
      return
    }

    enableClearNominationNewFormAward()
    disableClearNominationNewFormStaff()
    disableClearNominationNewFormDescription()
    disableNominationNewFormSubmit()
  })
}

function disableClearNominationNewFormEvent() {
  $('#nomination_new_form-event').attr('disabled', true);
  $('#nomination_new_form-event').empty()
}

function enableClearNominationNewFormEvent() {
  $('#nomination_new_form-event').attr('disabled', false);
  $('#nomination_new_form-event')
    .empty()
    .append('<option selected="selected" value="-1">Select an Event</option>')

  var officeId = $('#nomination_new_form-office').val()
  var date = $('#nomination_new_form-date').val()
  updateNominationNewFormEvent(officeId, date)
}


/**************************
          AWARD
/**************************/
function initNominationNewFormAward() {
  disableClearNominationNewFormAward()
  addListenerNominationNewFormAward()
}

function updateNominationNewFormAward(eventId) {
  $.get( "/api/awards", { eventId: eventId })
    .done(function (data) {
      console.log('/api/awards data: >', data)

      var results =  data.map(function(item) {
        return {
          id: item.awardId,
          text: item.awardcategoryName
        }
      })

      console.log('Results Awards: >', results)

      var limit = results.length > 3 ? 3 : results.length
      for (var i = 0; i < limit; i++)
        console.log(results[i])

      $("#nomination_new_form-award").select2({
        data: results,
        allowClear: true
      })
    })
}

function addListenerNominationNewFormAward() {
  $("#nomination_new_form-award").on('change', function() {
    var value = $(this).val()

    console.log('award value...', value)
    if (!value) {
      disableClearNominationNewFormStaff()
      disableClearNominationNewFormDescription()
      disableNominationNewFormSubmit()
      return
    }

    enableClearNominationNewFormStaff()
    disableClearNominationNewFormDescription()
    disableNominationNewFormSubmit()
  })
}

function disableClearNominationNewFormAward() {
  $('#nomination_new_form-award').attr('disabled', true);
  $('#nomination_new_form-award').empty()
}

function enableClearNominationNewFormAward() {
  $('#nomination_new_form-award').attr('disabled', false);
  $('#nomination_new_form-award')
    .empty()
    .append('<option selected="selected" value="-1">Select an Award</option>')

  var eventId = $('#nomination_new_form-event').val()
  updateNominationNewFormAward(eventId)
}


/**************************
          Staff
/**************************/
function initNominationNewFormStaff() {
  disableClearNominationNewFormStaff()
  addListenerNominationNewFormStaff()
}

function updateNominationNewFormStaff(eventId) {
  $.get( "/api/staffs", function (data) {
      console.log('/api/staffs data: >', data)

      var results =  data.map(function(item) {
        return {
          id: item.id,
          text: item.name
        }
      })

      console.log('Results Staffs: >', results)

      var limit = results.length > 3 ? 3 : results.length
      for (var i = 0; i < limit; i++)
        console.log(results[i])

      $("#nomination_new_form-staff").select2({
        data: results,
        allowClear: true
      })
    })
}

function addListenerNominationNewFormStaff() {
  $("#nomination_new_form-staff").on('change', function() {
    var value = $(this).val()

    console.log('staff value...', value)
    if (!value) {
      disableClearNominationNewFormDescription()
      disableNominationNewFormSubmit()
      return
    }

    enableClearNominationNewFormDescription()
    disableNominationNewFormSubmit()
  })
}

function disableClearNominationNewFormStaff() {
  $('#nomination_new_form-staff').attr('disabled', true);
  $('#nomination_new_form-staff').empty()
}

function enableClearNominationNewFormStaff() {
  $('#nomination_new_form-staff').attr('disabled', false);
  $('#nomination_new_form-staff')
    .empty()
    .append('<option selected="selected" value="-1">Select an Staff</option>')

  updateNominationNewFormStaff()
}


/**************************
        Description
/**************************/
function initNominationNewFormDescription() {
  disableClearNominationNewFormDescription()
  addListenerNominationNewFormDescription()
}


function addListenerNominationNewFormDescription() {
  $("#nomination_new_form-description").on('change keyup', function() {
    var value = $(this).val()

    console.log('description value...', value)
    if (!value) {
      disableNominationNewFormSubmit()
      return
    }

    enableNominationNewFormSubmit()
  })
}

function disableClearNominationNewFormDescription() {
  $('#nomination_new_form-description').attr('disabled', true);
  $('#nomination_new_form-description').val('')
}

function enableClearNominationNewFormDescription() {
  $('#nomination_new_form-description').attr('disabled', false);
  $('#nomination_new_form-description').val('')
}


/**************************
        Submit
/**************************/
function initNominationNewFormSubmit() {
  disableNominationNewFormSubmit()
}

function disableNominationNewFormSubmit() {
  $('#nomination_new_form-submit').attr('disabled', true);
}

function enableNominationNewFormSubmit() {
  $('#nomination_new_form-submit').attr('disabled', false);
}

module.exports = init

},{}],11:[function(require,module,exports){

/**************************
        INITIAL
/**************************/
function init() {
  $(function() {
    console.log('initNomineeStatus...')
    initNomineeStatus()
  })
}

function initNomineeStatus() {
  var nominations = $('.nomination')

  for (var i = 0; i < nominations.length; i++)
    updateNominationStatus(nominations[i])
}

function updateNominationStatus(nomination) {
  var id = $(nomination).attr('data-nominationid')
  var winner = $(nomination).attr('data-nominationwinner')
  var winner = winner == 0 ? false : true

  if (winner)
    setNomineeAsWinner(nomination)
  else
    setNomineeAsLoser(nomination)
}

function setNomineeAsWinner(nomination) {
  $(nomination).find('.winner').css('display', 'block')
  $(nomination).find('.loser').css('display', 'none')
  $(nomination).find('.maybe').css('display', 'none')
}

function setNomineeAsLoser(nomination) {
  $(nomination).find('.winner').css('display', 'none')
  $(nomination).find('.loser').css('display', 'block')
  $(nomination).find('.maybe').css('display', 'none')
}

function initAwardingNominee() {
  var nominations = $('.nomination')

  for (var i = 0; i < nominations.length; i++)
    awardNominee(nominations[i])
}

function awardNominee(nomination) {
  $(nomination).find('.winnerButtons').on('click', function() {

    var id = $(nomination).attr('data-nominationid')
    var url = '/api/winners?nominationid=' + id

    $.post(url, function(data) {
        console.log('success', data)
    })

    // $.post is Async. These are optimistic updates
    updateDataNominationWinner(nomination)
    updateNominationStatus(nomination)
  })
}

function updateDataNominationWinner(nomination) {
  var winner = $(nomination).attr('data-nominationwinner')
  var invertedWinner = winner == 1 ? 0 : 1
  $(nomination).attr('data-nominationwinner', invertedWinner)
}

module.exports = init

},{}],12:[function(require,module,exports){

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

},{"./helpers/event_search":8,"./helpers/nomination_new_form":10}],13:[function(require,module,exports){
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

},{"./event_award_nomination_edit":1,"./event_award_nomination_new":2,"./event_award_nomination_show":3,"./event_award_show":4,"./event_edit":5,"./event_new":6,"./event_show":7,"./helpers/formatdate":9,"./helpers/winner_status":11,"./homepage":12}],14:[function(require,module,exports){
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (typeof define === 'function' && define.amd) {
    define(function () {
      return dateFormat;
    });
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);

},{}]},{},[13]);
