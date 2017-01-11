
module.exports = knex => {
  return {

    findByLocationDate: filterObj => {
      return knex('events')
        .join('locations', 'locations.id', 'events.locationId')
        .where({ 'events.locationId': filterObj.locationId })
        .andWhere('events.start', '<=', filterObj.date)
        .andWhere('events.end', '>=', filterObj.date)
        .select(
          'events.id as id',
          'events.name as name',
          'events.start as start',
          'events.end as end',
          'locations.name as location'
        )
    },


    findById: id => {

      return Promise.all([

        knex('events')
          .join('locations', 'locations.id', 'events.locationId')
          .where({ 'events.id': id })
          .select(
            'locations.id as locationId',
            'locations.name as location',
            'events.end as enddate',
            'events.start as startdate'
          ),

        knex('awards')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .where({ 'awards.eventId': id })
          .select(
            'awards.id as id',
            'awardcategorys.name as awardcategory',
            'awardcategorys.description as description'
          ),

        knex('nominations')
          .join('awards', 'awards.id', 'nominations.awardId')
          .join('persons', 'persons.id', 'nominations.personId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .join('events', 'events.id', 'awards.eventId')
          .where({ 'awards.eventId': id })
          .select(
            'persons.name as name',
            'nominations.winner as winner',
            'awards.id as awardId',
            'events.end as enddate',
            'events.start as startdate'
          )

      ])
    }


  }
}
