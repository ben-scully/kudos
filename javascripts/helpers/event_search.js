

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
