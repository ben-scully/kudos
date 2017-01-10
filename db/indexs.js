
module.exports = function (knex) {
  return {

    index: () => {

      return Promise.all([

        knex('locations').select(),
        knex('weeks').select(),
        knex('awardcategorys').select(),
        knex('persons').select(),
        knex('nominations')
          .join('fridaymeetings', 'fridaymeetings.id', 'awards.fridaymeetingId')
          .join('awards', 'awards.id', 'nominations.awardId')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({ 'fridaymeetings.id': 130}) // latest fridaymeeting id
          .groupBy('locations.id')
          .count('locations.id as total')
          .select(
            'locations.name as location'
          )

      ])

    }

  }
}
