
module.exports = function (knex) {
  return {

    index: () => {

      return Promise.all([

        knex('offices').select(),
        knex('offices').select(), //  temporary replace weeks
        knex('awardcategorys').select(),
        knex('staffs').select(),
        knex('nominations')
          .join('events', 'events.id', 'awards.eventId')
          .join('awards', 'awards.id', 'nominations.awardId')
          .join('offices', 'offices.id', 'events.officeId')
          .where({ 'events.id': 130}) // latest event id
          .groupBy('offices.id')
          .count('offices.id as total')
          .select(
            'offices.name as office'
          )

      ])

    }

  }
}
