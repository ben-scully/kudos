
/**************************
        INITIAL
/**************************/
$(function(){
  initEventSearch()
})

function initEventSearch() {
  initEventSearchLocation()
  initEventSearchDate()
  initEventSearchEvent()
}





/**************************
          LOCATION
/**************************/
function initEventSearchLocation() {
  populateEventSearchLocation()
  addListenerEventSearchLocation()
}

function populateEventSearchLocation() {
  $.get( "/api/locations", function (data) {
    var results =  data.map(function(item) {
      return { id:item.id, text: item.name }
    })

    console.log('Results Locations:\n', results)

    $("#eventSearchLocation").select2({
      minimumInputLength: 1,
      data: results,
      placeholder: 'Select an Location',
    })
  })
}

function addListenerEventSearchLocation() {
  $("#eventSearchLocation").on('change', function() {
    var value = $(this).val()

    if (!value) {
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
  $('#eventSearchDate').datepicker({
    autoclose: true,
    format: {
      toDisplay: function (date, format, language) {
        return formatDate(date)
      },
      toValue: function (date, format, language) {
        return formatDate(date)
      }
    }
  })
  addListenerEventSearchDate()
}

function addListenerEventSearchDate() {
  $("#eventSearchDate").on('change', function() {
    var value = $(this).val()

    if (!value) {
      disableClearEventSearchEvent()
      return
    }

    enableClearEventSearchEvent()
  })
}

function disableClearEventSearchDate() {
  $('#eventSearchDate').attr('disabled', true);
  $('#eventSearchDate').val('')
}

function enableClearEventSearchDate() {
  $('#eventSearchDate').attr('disabled', false);
  $('#eventSearchDate').val('')
}





/**************************
          EVENT
/**************************/
function initEventSearchEvent() {
  disableClearEventSearchEvent()
  addListenerEventSearchEvent()
}

function updateEventSearchEvent(locationId, date) {
  $.get( "/api/events", { locationId:locationId, date:date })
    .done(function (data) {
      var results =  data.map(function(item) {
        return {
          id:item.id,
          text: item.name + ' ' + item.start + ' - ' + item.end }
      })

      console.log('Results Events:\n', results)

      $("#eventSearchEvent").select2({
        minimumInputLength: 1,
        data: results,
        placeholder: { id:-1, text: 'Select an Event' },
      })
    })
}

function addListenerEventSearchEvent() {
  $("#eventSearchEvent").on('change', function() {
    var value = $(this).val()

    if (!value) {
      disableEventSearchSubmit()
      return
    }

    enableEventSearchSubmit()
  })
}

function disableClearEventSearchEvent() {
  $('#eventSearchEvent').attr('disabled', true);
  $('#eventSearchEvent').val('')
}

function enableClearEventSearchEvent() {
  $('#eventSearchEvent').attr('disabled', false);
  $('#eventSearchEvent').val('')

  var locationId = $('#eventSearchLocation').val()
  var date = $('#eventSearchDate').val()
  updateEventSearchEvent(locationId, date)
}

function disableEventSearchSubmit() {
  $('#eventSearchSubmit').attr('href', '');
}

function enableEventSearchSubmit() {
  var eventId = $('#eventSearchEvent').val()
  var link = '/events/' + eventId
  $('#eventSearchSubmit').attr('href', link);
}





/**************************
          HELPER
/**************************/
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
