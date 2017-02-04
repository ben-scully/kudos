
module.exports = knex => {
  return {

    findByIdBasic: id => {
      return knex('nominations').where({ id: id }).select()
    },
    
    nominationForm: () => {
      return Promise.all([
        knex('staffs').select(),
        knex('offices').select(),
        knex('offices').select(), // temporary
        knex('awards')
          .join('offices', 'offices.id', 'awards.officeId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .select(
            'awards.id as id',
            'offices.name as office',
            'awardcategorys.name as awardcategory'
          )
      ])
    },

    findAll: () => {
      return knex('nominations')
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'awards.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'nominations.id as id',
          'awards.id as awardId',
          'offices.name as office',
          'awardcategorys.name as awardcategory',
          'staffs.name as staff',
          'nominations.winner as winner'
        )
    },

    findAllByFilter: filterObj => {
      return knex('nominations')
        .where(filterObj)
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'awards.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'nominations.id as id',
          'awards.id as awardId',
          'offices.name as office',
          'awardcategorys.name as awardcategory',
          'staffs.name as staff',
          'nominations.winner as winner'
        )
    },

    findAllOptions: () => {
      return Promise.all([
        knex('staffs').select(),
        knex('offices').select(),
        knex('awards')
          .join('offices', 'offices.id', 'awards.officeId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .select(
            'awards.id as id',
            'offices.name as office',
            'awardcategorys.name as awardcategory'
          )
      ])
    },


    findById: id => {

      return knex('nominations')
        .join('events', 'events.id', 'awards.eventId')
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'events.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .where({ 'nominations.id': id })
        .select(
          'events.end as enddate',
          'events.start as startdate',
          'offices.name as office',
          'awardcategorys.name as awardcategory',
          'awardcategorys.description as awardcategoryDescription',
          'staffs.name as name',
          'nominations.description as nominationDescription',
          'nominations.winner as winner'
        )
    },


    findByIdPlusOptions: id => {
      return Promise.all([
        knex('nominations')
          .where({ 'nominations.id': id})
          .join('awards', 'awards.id', 'nominations.awardId')
          .join('offices', 'offices.id', 'awards.officeId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .join('staffs', 'staffs.id', 'nominations.staffId')
          .select(
            'nominations.id as id',
            'awards.id as awardId',
            'offices.name as office',
            'awardcategorys.name as awardcategory',
            'staffs.name as staff',
            'nominations.description as description',
            'nominations.winner as winner'
          ),
        knex('staffs').select(),
        knex('awards')
          .join('offices', 'offices.id', 'awards.officeId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .select(
            'awards.id as id',
            'offices.name as office',
            'awardcategorys.name as awardcategory'
          )
      ])
    },

    findByFilter: filterObj => {
      return knex('nominations')
        .where(filterObj)
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('offices', 'offices.id', 'awards.officeId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('staffs', 'staffs.id', 'nominations.staffId')
        .select(
          'nominations.id as id',
          'awards.id as awardId',
          'offices.name as office',
          'awardcategorys.name as awardcategory',
          'staffs.name as staff',
          'nominations.winner as winner'
        )
    },

    create: createObj => {
      return knex('nominations').insert(createObj)
    },

    update: updateObj => {
      return knex('nominations')
        .where({ id: updateObj.id })
        .update({
          awardId: updateObj.awardId,
          staffId: updateObj.staffId,
          description: updateObj.description
        })
    },

    updateWinner: updateObj => {
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
