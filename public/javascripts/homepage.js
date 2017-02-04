
/**************************
        INITIAL
/**************************/
$(function(){
  initEventSearch()
})

function initEventSearch() {
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

    console.log('Results Offices:')
    if (results)
      if (results.length > 2)
        console.log(results[0], results[1], results[2])

    $("#eventSearchOffice").select2({
      data: results,
      allowClear: true
    })
  })
}

function addListenerEventSearchOffice() {
  $("#eventSearchOffice").on('change', function() {
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
  // $('#eventSearchDate').datepicker({
  //   autoclose: true,
  //   format: {
  //     toDisplay: function (date, format, language) {
  //       return formatDate(date)
  //     },
  //     toValue: function (date, format, language) {
  //       return formatDate(date)
  //     }
  //   }
  // })
  addListenerEventSearchDate()
}

function addListenerEventSearchDate() {
  $("#eventSearchDate").on('change', function() {
    var value = $(this).val()

    if (!value || value < 0) {
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

function updateEventSearchEvent(officeId, date) {
  $.get( "/api/events", { officeId:officeId, date:date })
    .done(function (data) {
      var results =  data.map(function(item) {
        return {
          id: item.eventId,
          text: item.eventName + ' ' + formatDate(item.eventStartdate) + ' - ' + formatDate(item.eventEnddate) }
      })

      console.log('Results Events:')
      if (results)
        if (results.length > 2)
          console.log(results[0], results[1], results[2])

      $("#eventSearchEvent").select2({
        data: results,
        allowClear: true
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

  var officeId = $('#eventSearchOffice').val()
  var date = $('#eventSearchDate').val()
  updateEventSearchEvent(officeId, date)
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
