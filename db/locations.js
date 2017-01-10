
module.exports = knex => {
  return {

    findAll: () => {
      return knex('locations').select()
    },

    findById: id => {
      return knex('locations').select().where({ id: id})
    },

    create: createObj => {
      return knex('locations').insert(createObj)
    },

    update: updateObj => {
      return knex('locations')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description
        })
    }

  }
}
