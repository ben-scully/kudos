"use strict"

module.exports = knex => {
  return {

    findById: id => {
      console.log('DB Events: findById:', id)

      return knex('events')
        .where('events.id', id)
        .leftOuterJoin('offices', 'offices.id', 'events.officeId')
        .leftOuterJoin('awards', 'awards.eventId', 'events.id')
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
      console.log('DB Events - create:', createObj)

      return knex('events').insert(createObj)
    },

    update: (id, updateObj) => {
      console.log('DB Events - id / update:', id, ' / ', updateObj)

      return knex('events')
        .where('id', id)
        .update(updateObj)
    }

  }
}
