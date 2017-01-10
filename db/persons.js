
module.exports = knex => {
  return {

    findAll: () => {
      return knex('persons').select()
    },

    findById: id => {
      return knex('persons').select().where({ id: id})
    },

    create: createObj => {
      return knex('persons').insert(createObj)
    },

    update: updateObj => {
      return knex('persons')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description
        })
    }

  }
}
