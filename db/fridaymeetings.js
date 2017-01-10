
module.exports = knex => {
  return {


    findById: id => {

      return Promise.all([

        knex('fridaymeetings')
          .join('locations', 'locations.id', 'fridaymeetings.locationId')
          .join('weeks', 'weeks.id', 'fridaymeetings.weekId')
          .where({ 'fridaymeetings.id': id })
          .select(
            'locations.id as locationId',
            'locations.name as location',
            'weeks.id as weekId',
            'weeks.date as date'
          ),

        knex('awards')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .where({ 'awards.fridaymeetingId': id })
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
          .where({ 'awards.fridaymeetingId': id })
          .select(
            'persons.name as name',
            'nominations.winner as winner',
            'weeks.date as date',
            'awards.id as awardId'
          )

      ])
    }


  }
}
