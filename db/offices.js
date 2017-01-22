
module.exports = knex => {
  return {

    findAll: () => {
      return knex('offices').select()
    },

    findById: id => {
      return knex('offices').select().where({ id: id})
    },

    create: createObj => {
      return knex('offices').insert(createObj)
    },

    update: updateObj => {
      return knex('offices')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description
        })
    }

  }
}
