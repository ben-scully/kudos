
exports.up = function(knex, Promise) {
  console.log('Tables created')

  return Promise.all([

    knex.schema.createTableIfNotExists('locations', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('awardcategorys', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('persons', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('events', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description')
      table.dateTime('start').notNullable()
      table.dateTime('end').notNullable()
      table.integer('locationId').notNullable()
      table.foreign('locationId')
        .references('id')
        .inTable('locations')
    }),

    knex.schema.createTableIfNotExists('awards', table => {
      table.increments('id').primary()
      table.integer('eventId').notNullable()
      table.foreign('eventId')
        .references('id')
        .inTable('events')
      table.integer('awardcategoryId').notNullable()
      table.foreign('awardcategoryId')
        .references('id')
        .inTable('awardcategorys')
      table.unique(['eventId', 'awardcategoryId'])
    }),

    knex.schema.createTableIfNotExists('nominations', table => {
      table.increments('id').primary()
      table.integer('awardId').notNullable()
      table.foreign('awardId')
        .references('id')
        .inTable('awards')
      table.integer('personId').notNullable()
      table.foreign('personId')
        .references('id')
        .inTable('persons')
      table.string('description').notNullable()
      table.boolean('winner').defaultTo(false)
      table.unique(['awardId', 'personId'])
    }),

    knex.schema.createTableIfNotExists('events_awardcategorys', table => {
      table.increments('id').primary()
      table.integer('eventId').notNullable()
      table.foreign('eventId')
        .references('id')
        .inTable('events')
      table.integer('awardcategoryId').notNullable()
      table.foreign('awardcategoryId')
        .references('id')
        .inTable('awardcategorys')
      table.unique(['eventId', 'awardcategoryId'])
    })

  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([

    knex.schema.dropTableIfExists('weeks').then( () => {
      console.log('weeks Table was dropped')
    }),

    knex.schema.dropTableIfExists('persons').then( () => {
      console.log('persons Table was dropped')
    }),

    knex.schema.dropTableIfExists('locations').then( () => {
      console.log('locations Table was dropped')
    }),

    knex.schema.dropTableIfExists('awardcategorys').then( () => {
      console.log('awardcategorys Table was dropped')
    }),

    knex.schema.dropTableIfExists('nominations').then( () => {
      console.log('nominations Table was dropped')
    }),

    knex.schema.dropTableIfExists('awards').then( () => {
      console.log('awards Table was dropped')
    }),

    knex.schema.dropTableIfExists('events_awardcategorys').then( () => {
      console.log('events_awardcategorys Table was dropped')
    }),

    knex.schema.dropTableIfExists('events').then( () => {
      console.log('events Table was dropped')
    })

  ])
};
