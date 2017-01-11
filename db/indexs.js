
module.exports = function (knex) {
  return {

    index: () => {

      return Promise.all([

        knex('locations').select(),
        knex('locations').select(), //  temporary replace weeks
        knex('awardcategorys').select(),
        knex('persons').select(),
        knex('nominations')
          .join('events', 'events.id', 'awards.eventId')
          .join('awards', 'awards.id', 'nominations.awardId')
          .join('locations', 'locations.id', 'events.locationId')
          .where({ 'events.id': 130}) // latest event id
          .groupBy('locations.id')
          .count('locations.id as total')
          .select(
            'locations.name as location'
          )

      ])

    }

  }
}
