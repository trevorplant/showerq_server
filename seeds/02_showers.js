var v4 = require('node-uuid').v4

exports.seed = function(knex, Promise) {
  var tableName = 'showers'

  var rows = [
    {
      name: 'Male shower',
      gender: 'male',
      guid: v4(),
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292'
    },
    {
      name: 'female shower',
      gender: 'female',
      guid: v4(),
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292'
    },
  ]

  return knex( tableName )
    //Empty the table
    .del()
    .then(function() {
      return knex.insert(rows).into(tableName)
    })

}