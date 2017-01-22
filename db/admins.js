
module.exports = knex => {
  return {

    findAll: () => {
      return Promise.all([
        knex('offices').select(),
        knex('awardcategorys').select(),
        knex('staffs').select()
      ])
    }

  }
}
