
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
