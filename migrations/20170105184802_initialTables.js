
exports.up = function(knex, Promise) {
  console.log('Tables created')

  return Promise.all([

    knex.schema.createTableIfNotExists('locations', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
    }),

    knex.schema.createTableIfNotExists('weeks', table => {
      table.increments('id').primary()
      table.date('date').notNullable()
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

    knex.schema.createTableIfNotExists('fridaymeetings', table => {
      table.increments('id').primary()
      table.integer('locationId').notNullable()
      table.foreign('locationId')
        .references('id')
        .inTable('locations')
      table.integer('weekId').notNullable()
      table.foreign('weekId')
        .references('id')
        .inTable('weeks')
      table.unique(['locationId', 'weekId'])
    }),

    knex.schema.createTableIfNotExists('awards', table => {
      table.increments('id').primary()
      table.integer('fridaymeetingId').notNullable()
      table.foreign('fridaymeetingId')
        .references('id')
        .inTable('fridaymeetings')
      table.integer('awardcategoryId').notNullable()
      table.foreign('awardcategoryId')
        .references('id')
        .inTable('awardcategorys')
      table.unique(['fridaymeetingId', 'awardcategoryId'])
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

    knex.schema.createTableIfNotExists('fridaymeetings_awardcategorys', table => {
      table.increments('id').primary()
      table.integer('fridaymeetingId').notNullable()
      table.foreign('fridaymeetingId')
        .references('id')
        .inTable('fridaymeetings')
      table.integer('awardcategoryId').notNullable()
      table.foreign('awardcategoryId')
        .references('id')
        .inTable('awardcategorys')
      table.unique(['fridaymeetingId', 'awardcategoryId'])
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

    knex.schema.dropTableIfExists('fridaymeetings_awardcategorys').then( () => {
      console.log('fridaymeetings_awardcategorys Table was dropped')
    }),

    knex.schema.dropTableIfExists('fridaymeetings').then( () => {
      console.log('fridaymeetings Table was dropped')
    })

  ])
};
