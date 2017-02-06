"use strict"

module.exports = knex => {
  return {

    findById: id => {
      console.log('DB Awards: findById:', id)

      return knex('awards')
        .where('awards.id', id)
        .join('events', 'events.id', 'awards.eventId')
        .leftOuterJoin('offices', 'offices.id', 'events.officeId')
        .leftOuterJoin('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .leftOuterJoin('nominations', 'nominations.awardId', 'awards.id')
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
      console.log('DB Awards: create:', createObj)

      return knex('awards').insert(createObj)
    },

    update: (id, updateObj) => {
      console.log('DB Awards: update:', updateObj)

      return knex('awards')
        .where('awards.id', id)
        .update(updateObj)
    }

  }
}
