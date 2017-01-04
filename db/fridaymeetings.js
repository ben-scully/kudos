var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])


module.exports = {

  findFridayMeetingAllAwards: filterObj => {
    console.log('findFridayMeetingAllAwards\n', filterObj)

    return Promise.all([
      knex('awards')
        .where({ 'locationId': filterObj.locationId })
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as awardId',
          'awardcategorys.name as awardcategoryName',
          'awardcategorys.description as awardcategoryDescription'
        ),
      knex('nominations')
        .where({ 'awards.locationId': filterObj.locationId })
        .join('awards', 'awards.id', 'nominations.awardId')
        .join('persons', 'persons.id', 'nominations.personId')
        .select(
          'persons.name as nominationPerson',
          'nominations.id as nominationId',
          'nominations.description as nominationDescription',
          'nominations.winner as nominationWinner'
        )
    ])
  },

  findFridayMeetingOneAward: filterObj => {
    console.log('findFridayMeetingOneAward\n', filterObj)

    return Promise.all([
      knex('awards')
        .where({ 'awards.id': filterObj.awardId })
        .join('locations', 'locations.id', 'awards.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
        .select(
          'awards.id as id',
          'locations.name as location',
          'awardcategorys.name as awardcategory',
          'awardcategorys.description as awardcategoryDescription'
        ),
      knex('nominations')
        .where({ 'nominations.awardId': filterObj.awardId })
        .join('persons', 'persons.id', 'nominations.personId')
        .select(
          'persons.name as nominationPerson',
          'nominations.id as nominationId',
          'nominations.description as nominationDescription',
          'nominations.winner as nominationWinner'
        )
      ])
  },

  findFridayMeetingOneNomination: filterObj => {
    console.log('findFridayMeetingOneNomination\n', filterObj)

    return knex('nominations')
      .where({ 'nominations.id': filterObj.nominationId })
      .join('awards', 'awards.id', 'nominations.awardId')
      .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
      .join('locations', 'locations.id', 'awards.locationId')
      .join('persons', 'persons.id', 'nominations.personId')
      .select(
        'awardcategorys.name as awardcategory',
        'awardcategorys.description as awardcategoryDescription',
        'locations.name as awardlocation',
        'persons.name as nominationPerson',
        'nominations.id as nominationId',
        'nominations.description as nominationDescription',
        'nominations.winner as nominationWinner'
      )
  }

}
