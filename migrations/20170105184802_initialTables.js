
exports.up = function(knex, Promise) {
  console.log('Tables created')

  return Promise.all([

    knex.schema.createTableIfNotExists('locations', table => {
      table.increments('id')
      table.string('name')
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('awardcategorys', table => {
      table.increments('id')
      table.string('name')
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('persons', table => {
      table.increments('id')
      table.string('name')
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('weeks', table => {
      table.increments('id')
      table.date('friday')
    }),

    knex.schema.createTableIfNotExists('awards', table => {
      table.increments('id')
      table.integer('locationId')
      table.integer('awardcategoryId')
      table.integer('weekId')
    }),

    knex.schema.createTableIfNotExists('nominations', table => {
      table.increments('id')
      table.integer('awardId')
      table.integer('personId')
      table.string('description')
      table.boolean('winner')
    })

  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([

    knex.schema.dropTableIfExists('locations').then( () => {
      console.log('locations Table was dropped')
    }),

    knex.schema.dropTableIfExists('awardcategorys').then( () => {
      console.log('awardcategorys Table was dropped')
    }),

    knex.schema.dropTableIfExists('weeks').then( () => {
      console.log('weeks Table was dropped')
    }),

    knex.schema.dropTableIfExists('persons').then( () => {
      console.log('persons Table was dropped')
    }),

    knex.schema.dropTableIfExists('awards').then( () => {
      console.log('awards Table was dropped')
    }),

    knex.schema.dropTableIfExists('nominations').then( () => {
      console.log('nominations Table was dropped')
    })

  ])
};
