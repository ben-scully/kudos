var knexConfig = require('../knexfile.js')
var knex = require('knex')(knexConfig["development"])


module.exports = knex => {
  return {

    findFridayMeetingAllAwards: filterObj => {

      return Promise.all([
        knex('fridaymeetings')
          .join('nominations', 'nominations.fridaymeetingId', 'fridaymeetings.id')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({
            'fridaymeetings.locationId': filterObj.locationId,
            'fridaymeetings.weekId': filterObj.weekId
          })
          .select(
            'locations.name as location',
            'weeks.date as date'
          ),

        knex('fridaymeetings_awardcategorys')
          .join('fridaymeetings', 'fridaymeetings.id', 'fridaymeetings_awardcategorys.fridaymeetingId')
          .join('awardcategorys', 'awardcategorys.id', 'fridaymeetings_awardcategorys.awardcategoryId')
          .where({
            'fridaymeetings.locationId': filterObj.locationId,
            'fridaymeetings.weekId': filterObj.weekId
          })
          .select(
            'awardcategorys.id as awardcategoryId',
            'awardcategorys.name as awardcategory',
            'awardcategorys.description as description'
          ),

        knex('nominations')
          .join('fridaymeetings', 'fridaymeetings.id', 'nominations.fridaymeetingId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .join('persons', 'persons.id', 'nominations.personId')
          .join('awardcategorys', 'awardcategorys.id', 'nominations.awardcategoryId')
          .where({
            'fridaymeetings.locationId': filterObj.locationId,
            'fridaymeetings.weekId': filterObj.weekId
          })
          .select(
            'persons.name as name',
            'nominations.winner as winner',
            'weeks.date as date',
            'awardcategorys.id as awardcategoryId'
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
}
