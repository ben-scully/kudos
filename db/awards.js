
module.exports = knex => {
  return {


    findAll: () => {
      return knex('awards').select()
    },


    findById: id => {

      return Promise.all([

        knex('events')
          .join('awards', 'awards.eventId', 'events.id')
          .join('locations', 'locations.id', 'events.locationId')
          .where({ 'awards.id': id })
          .limit(1)
          .select(
            'locations.name as location',
            'events.end as enddate',
            'events.start as startdate'
          ),

        knex('awards')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .where({ 'awards.id': id })
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
          .where({ 'awards.id': id })
          .select(
            'awards.id as awardId',
            'nominations.winner as winner',
            'nominations.id as id',
            'persons.name as name',
            'events.end as enddate',
            'events.start as startdate'
          )

        ])
    },


    create: createObj => {
      return knex('awards').insert(createObj)
    },


    update: updateObj => {
      return knex('awards')
        .where({ id: updateObj.id })
        .update({
        })
    }


  }
}
