var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])

module.exports = {

  findAll: () => {
    return knex('awards')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .select(
        'awards.id as id',
        'locations.name as location',
        'awardcategorys.name as awardcategory'
      )
  },

  findAllOptions: () => {
    return Promise.all([
      knex('locations').select(),
      knex('awardcategorys').select()
    ])
  },

  findById: id => {
    console.log('AWARDS findById\n', id)
    return Promise.all([
      knex('awards')
        .where({ 'awards.id': id })
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as id',
          'locations.name as location',
          'awardcategorys.name as awardcategory'
        ),
      knex('nominations')
        .where({ 'nominations.awardId': id })
        .join('persons', 'persons.id', 'nominations.personId')
        .select(
          'persons.id as id',
          'persons.name as name',
          'nominations.id as nominationId',
          'nominations.winner as winner',
          'nominations.description as description'
        )
      ])
  },

  findByIdPlusOptions: id => {
    return Promise.all([
      knex('awards')
        .where({ 'awards.id': id })
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as id',
          'locations.name as location',
          'awardcategorys.name as awardcategory'
        ),
      knex('locations').select(),
      knex('awardcategorys').select()
    ])
  },

  create: createObj => {
    return knex('awards').insert(createObj)
  },

  update: updateObj => {
    return knex('awards')
      .where({ id: updateObj.id })
      .update({
        locationId: updateObj.locationId,
        awardcategoryId: updateObj.awardcategoryId
      })
  }

}
