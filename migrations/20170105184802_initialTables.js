
exports.up = function(knex, Promise) {
  console.log('Tables created')

  return Promise.all([

    knex.schema.createTableIfNotExists('fridaymeetings', table => {
      table.increments('id')
      table.integer('locationId')
      table.integer('weekId')
    }),

    knex.schema.createTableIfNotExists('nominations', table => {
      table.increments('id')
      table.integer('fridaymeetingId')
      table.integer('personId')
      table.integer('awardcategoryId')
      table.string('description')
      table.boolean('winner')
    }),

    knex.schema.createTableIfNotExists('fridaymeetings_awardcategorys', table => {
      table.increments('id')
      table.integer('fridaymeetingId')
      table.integer('awardcategoryId')
    }),

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
      table.date('date')
    })

  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([


    knex.schema.dropTableIfExists('fridaymeetings').then( () => {
      console.log('fridaymeetings Table was dropped')
    }),

    knex.schema.dropTableIfExists('nominations').then( () => {
      console.log('nominations Table was dropped')
    }),

    knex.schema.dropTableIfExists('fridaymeetings_awardcategorys').then( () => {
      console.log('fridaymeetings_awardcategorys Table was dropped')
    }),

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
    })

  ])
};
