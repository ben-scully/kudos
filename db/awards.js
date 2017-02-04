
module.exports = knex => {
  return {


    findAll: () => {
      return knex('awards').select()
    },


    findByEventId: eventId => {

      return knex('awards')
        .where({ 'events.id': eventId })
        .join('events', 'events.id', 'awards.eventId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as awardId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription'
        )
    },


    create: createObj => {
      return knex('awards').insert(createObj)
    },


    update: updateObj => {
      return knex('awards')
        .where({ id: updateObj.id })
        .update({
        })
    }


  }
}
