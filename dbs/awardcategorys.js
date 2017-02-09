
module.exports = knex => {
  return {

    findByEventId: eventId => {
      console.log('DB Awardcategorys: findByEventId:', eventId)

      return knex('events_awardcategorys')
        .where('events_awardcategorys.eventId', eventId)
        .join('events', 'events.id', 'events_awardcategorys.eventId')
        .join('awardcategorys', 'awardcategorys.id', 'events_awardcategorys.awardcategoryId')
        .select(
          'events.id as eventId',
          'events.name as eventName',
          'awardcategorys.id as awardcategoryId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription'
        )
    },

    create: createObj => {
      console.log('DB Awardcategorys: create:', createObj)

      return knex('awardcategorys').insert(createObj)
    },

    update: (id, updateObj) => {
      console.log('DB Awardcategorys - id / update:', id, ' / ', updateObj)

      return knex('awardcategorys')
        .where('id', id)
        .update(updateObj)
    }

  }
}
