
module.exports = knex => {
  return {


    findAll: () => {
      return knex('awards').select()
    },


    findById: id => {

      return Promise.all([

        knex('fridaymeetings')
          .join('awards', 'awards.fridaymeetingId', 'fridaymeetings.id')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({ 'awards.id': id })
          .limit(1)
          .select(
            'locations.name as location',
            'weeks.date as date'
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
          .join('fridaymeetings', 'fridaymeetings.id', 'awards.fridaymeetingId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({ 'awards.id': id })
          .select(
            'awards.id as awardId',
            'nominations.winner as winner',
            'nominations.id as id',
            'persons.name as name',
            'weeks.date as date'
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
