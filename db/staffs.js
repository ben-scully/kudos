
module.exports = knex => {
  return {

    findAll: () => {
      return knex('staffs').select()
    },

    findById: id => {
      return knex('staffs').select().where({ id: id})
    },

    create: createObj => {
      return knex('staffs').insert(createObj)
    },

    update: updateObj => {
      return knex('staffs')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description
        })
    }

  }
}
