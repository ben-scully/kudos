
module.exports = knex => {
  return {


    findByIdBasic: id => {
      console.log('DB Nominations - findByIdBasic:', id)

      return knex('nominations').where({ id: id }).select()
    },


    findById: id => {
      console.log('DB Nominations - findById:', id)

      return knex('nominations')
        .join('events', 'events.id', 'awards.eventId')
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'events.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .where({ 'nominations.id': id })
        .select(
          'events.end as eventEnddate',
          'events.start as eventStartdate',
          'offices.name as eventOffice',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription',
          'nominations.description as nominationDescription',
          'nominations.winner as nominationWinner',
          'staffs.name as staffName'
        )
    },


    findAll: () => {
      console.log('DB Nominations - findAll: n/a')

      return knex('nominations')
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'awards.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'awards.id as awardId',
          'offices.name as eventOffice',
          'awardcategorys.id as awardcategoryId',
          'awardcategory.description as awardcategoryDescription',
          'awardcategorys.name as awardcategoryName',
          'nominations.id as nominationId',
          'nominations.description as nominationDescription',
          'nominations.winner as nominationWinner',
          'staffs.name as staffName'
        )
    },


    create: createObj => {
      console.log('DB Nominations - create:', createObj)

      return knex('nominations').insert(createObj)
    },


    update: updateObj => {
      console.log('DB Nominations - update:', updateObj)

      return knex('nominations')
        .where({ id: updateObj.id })
        .update({
          awardId: updateObj.awardId,
          staffId: updateObj.staffId,
          description: updateObj.description
        })
    },


    updateWinner: updateObj => {
      console.log('DB Nominations - updateWinner:', updateObj)

      return knex('nominations')
        .where({
          id: updateObj.id
        })
        .update({
          winner: updateObj.winner
        })
    }


  }
}
