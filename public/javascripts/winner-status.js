
/**************************
        INITIAL
/**************************/
$(function(){
  initNomineeStatus()
  initAwardingNominee()
})

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
