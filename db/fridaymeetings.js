var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])


module.exports = {

  findFridayMeetingAllAwards: filterObj => {
    console.log('findFridayMeetingAllAwards\n', filterObj)

    return Promise.all([
      knex('awards')
        .where({
          'locationId': filterObj.locationId,
          'weekId': filterObj.weekId
        })
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .join('locations', 'locations.id', 'awards.locationId')
        .join('weeks', 'weeks.id', 'awards.weekId')
        .select(
          'awards.id as awardId',
          'locations.name as location',
          'weeks.friday as date',
          'awardcategorys.name as awardcategory',
          'awardcategorys.description as description'
        ),
      knex('nominations')
        .where({ 'awards.locationId': filterObj.locationId })
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('persons', 'persons.id', 'nominations.personId')
        .select(
          'persons.name as name',
          'awards.id as awardId',
          'nominations.id as nominationId',
          'nominations.description as description',
          'nominations.winner as winner'
        )
    ])
  },

  findFridayMeetingOneAward: filterObj => {
    console.log('findFridayMeetingOneAward\n', filterObj)

    return Promise.all([
      knex('awards')
        .where({ 'awards.id': filterObj.awardId })
        .join('locations', 'locations.id', 'awards.locationId')
        .join('weeks', 'weeks.id', 'awards.weekId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as id',
          'locations.name as location',
          'weeks.friday as date',
          'awardcategorys.name as awardcategory',
          'awardcategorys.description as description'
        ),
      knex('nominations')
        .where({ 'nominations.awardId': filterObj.awardId })
        .join('persons', 'persons.id', 'nominations.personId')
        .select(
          'persons.name as name',
          'nominations.id as nominationId',
          'nominations.description as description',
          'nominations.winner as winner'
        )
      ])
  },

  findFridayMeetingOneNomination: filterObj => {
    console.log('findFridayMeetingOneNomination\n', filterObj)

    return knex('nominations')
      .where({ 'nominations.id': filterObj.nominationId })
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('weeks', 'weeks.id', 'awards.weekId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select(
        'locations.name as location',
        'weeks.friday as date',
        'awardcategorys.name as awardcategory',
        'awardcategorys.description as awardcategoryDescription',
        'persons.name as name',
        'nominations.id as nominationId',
        'nominations.description as nominationDescription',
        'nominations.winner as winner'
      )
  }

}
