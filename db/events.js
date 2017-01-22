
module.exports = knex => {
  return {

    findById: id => {
      console.log('DB Events - findbyid:', id)

      return knex('events')
        .where({ 'events.id': id })
        .join('offices', 'offices.id', 'events.officeId')
        .join('awards', 'awards.eventId', 'events.id')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('nominations', 'nominations.awardId', 'awards.id')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'events.id as eventId',
          'events.name as eventName',
          'events.description as eventDescription',
          'events.startdate as eventStartdate',
          'events.enddate as eventEnddate',
          'offices.id as eventOfficeId',
          'offices.name as eventOfficeName',
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

    findByIdEdit: id => {
      console.log('DB Events - findByIdEdit:', id)

      return knex('events')
        .where({ 'events.id': id })
        .join('offices', 'offices.id', 'events.officeId')
        .join('events_awardcategorys', 'events_awardcategorys.eventId', 'events.id')
        .join('awardcategorys', 'awardcategorys.id', 'events_awardcategorys.awardcategoryId')
        .select(
          'events.id as eventId',
          'events.name as eventName',
          'events.description as eventDescription',
          'events.startdate as eventStartdate',
          'events.enddate as eventEnddate',
          'offices.id as eventOfficeId',
          'offices.name as eventOfficeName',
          'awardcategorys.id as awardcategoryId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription'
        )
    },


    findByOfficeDate: (officeId, date) => {
      console.log('DB Events - findByOfficeDate:', officeId, date, new Date(date))

      return knex('events')
        .where('offices.id', officeId)
        .andWhere('events.startdate', '<=', new Date(date))
        .andWhere('events.enddate', '>=', new Date(date))
        .join('offices', 'offices.id', 'events.officeId')
        .select(
          'events.id as eventId',
          'events.name as eventName',
          'events.description as eventDescription',
          'offices.id as eventOfficeId',
          'offices.name as eventOfficeName',
          'events.startdate as eventStartdate',
          'events.enddate as eventEnddate'
        )
    },


    create: createObj => {
      console.log('DB Events - create:', createObj)

      return knex('events').insert(createObj)
    },


    createNomination: createObj => {
      console.log('DB Events - createNomination:', createObj)

      return knex('nominations').insert(createObj)
    },


    update: updateObj => {
      console.log('DB Events - update:', updateObj)

      return knex('events')
        .where({ id: updateObj.id })
        .update({
          name: updateObj.name,
          description: updateObj.description,
          startdate: updateObj.startdate,
          enddate: updateObj.enddate,
          officeId: updateObj.officeId
        })
    }


  }
}
