var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])


module.exports = {

  nominationForm: () => {
    return Promise.all([
      knex('persons').select(),
      knex('locations').select(),
      knex('weeks').select(),
      knex('awards')
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select('awards.id as id',
                'locations.name as location',
                'awardcategorys.name as awardcategory'
              )
    ])
  },

  findAll: () => {
    return knex('nominations')
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select('nominations.id as id',
              'awards.id as awardId',
              'locations.name as location',
              'awardcategorys.name as awardcategory',
              'persons.name as person',
              'nominations.winner as winner'
            )
  },

  findAllByFilter: filterObj => {
    return knex('nominations')
      .where(filterObj)
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select('nominations.id as id',
              'awards.id as awardId',
              'locations.name as location',
              'awardcategorys.name as awardcategory',
              'persons.name as person',
              'nominations.winner as winner'
            )
  },

  findAllOptions: () => {
    return Promise.all([
      knex('persons').select(),
      knex('locations').select(),
      knex('awards')
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select('awards.id as id',
                'locations.name as location',
                'awardcategorys.name as awardcategory'
              ),
    ])
  },

  findById: id => {
    return knex('nominations')
      .where({ 'nominations.id': id})
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select('nominations.id as id',
              'awards.id as awardId',
              'locations.name as location',
              'awardcategorys.name as awardcategory',
              'persons.name as person',
              'nominations.description as description',
              'nominations.winner as winner'
            )
  },

  findByIdPlusOptions: id => {
    return Promise.all([
      knex('nominations')
        .where({ 'nominations.id': id})
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('persons', 'persons.id', 'nominations.personId')
        .select('nominations.id as id',
                'awards.id as awardId',
                'locations.name as location',
                'awardcategorys.name as awardcategory',
                'persons.name as person',
                'nominations.description as description',
                'nominations.winner as winner'
              ),
      knex('persons').select(),
      knex('awards')
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select('awards.id as id',
                'locations.name as location',
                'awardcategorys.name as awardcategory')
    ])
  },

  findByFilter: filterObj => {
    return knex('nominations')
      .where(filterObj)
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select('nominations.id as id',
              'awards.id as awardId',
              'locations.name as location',
              'awardcategorys.name as awardcategory',
              'persons.name as person',
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
        personId: updateObj.personId,
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
