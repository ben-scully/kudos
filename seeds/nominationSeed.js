
exports.seed = function(knex, Promise) {

  return Promise.join(

    knex('locations').del(),

    knex('locations').insert({
      id: 1,
      name: 'Melbourne',
      description: 'Melbourne office.'
    }),
    knex('locations').insert({
      id: 2,
      name: 'Christchurch',
      description: 'Christchurch office'
    }),



    knex('awardcategorys').del(),

    knex('awardcategorys').insert({
      id: 10,
      name: 'LooseWheel',
      description: 'Doing something silly.'
    }),
    knex('awardcategorys').insert({
      id: 20,
      name: 'Harper',
      description: 'Positive client feedback.'
    }),



    knex('persons').del(),

    knex('persons').insert({
      id: 100,
      name: 'Brian'
    }),
    knex('persons').insert({
      id: 200,
      name: 'Pearl'
    }),
    knex('persons').insert({
      id: 201,
      name: 'Kelly'
    }),



    knex('awards').del(),

    knex('awards').insert({
      id: 1000,
      locationId: 1,
      awardcategoryId: 10
    }),
    knex('awards').insert({
      id: 2000,
      locationId: 1,
      awardcategoryId: 20
    }),



    knex('nominations').del(),

    knex('nominations').insert({
      id: 1,
      personId: 100,
      awardId: 1000,
      description: 'Left a Coke in the freezer and it exploded.',
      winner: false
    }),
    knex('nominations').insert({
      id: 2,
      personId: 200,
      awardId: 1000,
      description: 'Wore blue jeans on a Thursday.',
      winner: true
    })

  )

};
