

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
