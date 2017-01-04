var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])

module.exports = {

  findAll: () => {
    return Promise.all([
      knex('locations').select(),
      knex('awardcategorys').select(),
      knex('persons').select()
    ])
  }

}
