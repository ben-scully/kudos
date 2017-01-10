
module.exports = knex => {
  return {

    findAll: () => {
      return Promise.all([
        knex('locations').select(),
        knex('awardcategorys').select(),
        knex('persons').select()
      ])
    }

  }
}
