
module.exports = knex => {
  return {

    findAll: () => {
      return knex('awardcategorys').select()
    },

    findById: id => {
      return knex('awardcategorys').select().where({ id: id})
    },

    findByEventId: eventId => {
      return knex('events_awardcategorys')
        .where({ 'events.id': eventId})
        .join('events', 'events.id', 'events_awardcategorys.eventId')
        .join('awardcategorys', 'awardcategorys.id', 'events_awardcategorys.awardcategoryId')
        .select(
          'awardcategorys.id as awardcategoryId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription'
        )
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
