
module.exports = knex => {
  return {

    findAll: () => {
      return knex('awardcategorys').select()
    },

    findById: id => {
      return knex('awardcategorys').select().where({ id: id})
    },

    create: createObj => {
      return knex('awardcategorys').insert(createObj)
    },

    update: updateObj => {
      return knex('awardcategorys')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description
        })
    }

  }
}
