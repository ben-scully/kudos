
module.exports = function (knex) {
  return {

    index: () => {
      return Promise.all([
        knex('locations').select(),
        knex('weeks').select(),
        knex('awardcategorys').select(),
        knex('persons').select(),
        knex('nominations')
          .join('fridaymeetings', 'fridaymeetings.id', 'nominations.fridaymeetingId')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({ 'fridaymeetings.id': 130})
          .groupBy('locations.id')
          .count('locations.id as total')
          .select(
            'locations.name as location'
          )
      ])
    }

  }
}
