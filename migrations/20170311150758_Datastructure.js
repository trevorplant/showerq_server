
exports.up = function (knex, Promise) {
  return knex
    .schema
    .createTable('locations', function (locationsTable) {
      //PK
      locationsTable.increments()
      locationsTable.string('guid', 36).notNullable().unique()

      //Data
      locationsTable.string('address', 2500).notNullable()
      locationsTable.string('name', 100).notNullable()
      locationsTable.timestamp('create_at').notNullable().defaultTo(knex.fn.now())
    })

    .createTable('users', function (usersTable) {
      //PK
      usersTable.increments()

      //Data
      usersTable.string('name', 50).notNullable()
      usersTable.string('username', 50).notNullable().unique()
      usersTable.string('email', 250).notNullable().unique()
      usersTable.string('password', 128).notNullable()
      usersTable.string('gender', 10).notNullable()
      usersTable.string('guid', 36).notNullable().unique()
      usersTable.string('location', 36).references('guid').inTable('locations')
      usersTable.timestamp('create_at').notNullable().defaultTo(knex.fn.now())
    })


    .createTable('showers', function(showersTable) {
      // PK
      showersTable.increments()

      // Data
      showersTable.string('guid', 36).notNullable().unique()
      showersTable.string('location', 36).references('guid').inTable('locations')
      showersTable.string('gender', 10).notNullable()
      showersTable.string('name', 50).notNullable()
      showersTable.timestamp('create_at').notNullable().defaultTo(knex.fn.now())

    })

    .createTable('shower_queues', function(queueTable) {
      // PK
      queueTable.increments()

      // Data
      queueTable.string('guid', 36).notNullable().unique()
      queueTable.string('user', 36).references('guid').inTable('users')
      queueTable.string('shower', 36).references('guid').inTable('showers')
      queueTable.timestamp('time_booked').notNullable()
      queueTable.boolean('cancelled').notNullable().defaultTo(false)
      queueTable.boolean('completed').notNullable().defaultTo(false)

    })
};

exports.down = function (knex, Promise) {
  return knex
        .schema
          .dropTableIfExists('shower_queues')
          .dropTableIfExists('showers')
          .dropTableIfExists('users')
          .dropTableIfExists('locations')

};
