
module.exports = knex => {
  return {


    findAll: () => {
      return knex('awards').select()
    },


    findById: id => {

      return Promise.all([

        knex('events')
          .join('awards', 'awards.eventId', 'events.id')
          .join('offices', 'offices.id', 'events.officeId')
          .where({ 'awards.id': id })
          .limit(1)
          .select(
            'offices.name as office',
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
          .join('staffs', 'staffs.id', 'nominations.staffId')
          .join('awardcategorys', 'awardcategorys.id', 'awards.awardcategoryId')
          .join('events', 'events.id', 'awards.eventId')
          .where({ 'awards.id': id })
          .select(
            'awards.id as awardId',
            'nominations.winner as winner',
            'nominations.id as id',
            'staffs.name as name',
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
