
module.exports = knex => {
  return {

    findById: id => {
      console.log('DB Nomination: findById:', id)

      return knex('nominations')
        .where('nominations.id', id)
        .leftOuterJoin('events', 'events.id', 'awards.eventId')
        .leftOuterJoin('offices', 'offices.id', 'events.officeId')
        .leftOuterJoin('awards', 'awards.id', 'nominations.awardId')
        .leftOuterJoin('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .leftOuterJoin('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'events.id as eventId',
          'events.name as eventName',
          'events.description as eventDescription',
          'events.startdate as eventStartDate',
          'events.enddate as eventEndDate',
          'offices.id as officeId',
          'offices.name as officeName',
          'awards.id as awardId',
          'awardcategorys.id as awardcategoryId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription',
          'nominations.id as nominationId',
          'nominations.description as nominationDescription',
          'nominations.winner as nominationWinner',
          'staffs.id as staffId',
          'staffs.name as staffName'
        )
    },

    create: createObj => {
      console.log('DB Nomination - create:', createObj)

      return knex('nominations').insert(createObj)
    },

    update: (id, updateObj) => {
      console.log('DB Nomination - id / update:', id, ' / ', updateObj)

      return knex('nominations')
        .where('id', id)
        .update(updateObj)
    }

  }
}
