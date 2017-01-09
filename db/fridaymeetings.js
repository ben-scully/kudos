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

      return Promise.all([

        knex('fridaymeetings')
          .join('nominations', 'nominations.fridaymeetingId', 'fridaymeetings.id')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({
            'fridaymeetings.locationId': filterObj.locationId,
            'fridaymeetings.weekId': filterObj.weekId
          })
          .limit(1)
          .select(
            'locations.name as location',
            'weeks.date as date'
          ),

          knex('nominations')
            .join('fridaymeetings', 'fridaymeetings.id', 'nominations.fridaymeetingId')
            .join('awardcategorys', 'awardcategorys.id', 'nominations.awardcategoryId')
            .where({
              'fridaymeetings.locationId': filterObj.locationId,
              'fridaymeetings.weekId': filterObj.weekId,
              'nominations.awardcategoryId': filterObj.awardcategoryId
            })
            .limit(1)
            .select(
              'awardcategorys.id as id',
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
              'fridaymeetings.weekId': filterObj.weekId,
              'nominations.awardcategoryId': filterObj.awardcategoryId
            })
            .select(
              'persons.name as name',
              'nominations.description as description',
              'nominations.winner as winner',
              'weeks.date as date'
            )

        ])
    },


    findFridayMeetingOneNomination: id => {

      return knex('nominations')
        .join('fridaymeetings', 'fridaymeetings.id', 'nominations.fridaymeetingId')
        .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
        .join('locations', 'locations.id', 'fridaymeetings.locationId')
        .join('awardcategorys', 'awardcategorys.id', 'nominations.awardcategoryId')
        .join('persons', 'persons.id', 'nominations.personId')
        .where({ 'nominations.id': id })
        .select(
          'weeks.date as date',
          'locations.name as location',
          'awardcategorys.name as awardcategory',
          'awardcategorys.description as awardcategoryDescription',
          'persons.name as name',
          'nominations.description as nominationDescription',
          'nominations.winner as winner'
        )
    }

  }
}
