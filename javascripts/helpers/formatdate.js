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
