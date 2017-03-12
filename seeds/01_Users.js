
var v4 = require('node-uuid').v4

exports.seed = function(knex, Promise) {
  var tableName = 'users'

  var rows = [
    {
      name: 'Trevor Plant',
      username: 'trevios',
      password: 'password',
      email: 'tp@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },
    {
      name: 'Stephen Bartlett',
      username: 'stevo',
      password: 'password',
      email: 'sb@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },
    {
      name: 'Ian MacDonald',
      username: 'MrD',
      password: 'password',
      email: 'im@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },
    {
      name: 'Dan Gray',
      username: 'dan',
      password: 'password',
      email: 'dg@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },
    {
      name: 'Davor Bisko',
      username: 'davor',
      password: 'password',
      email: 'db@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },
    {
      name: 'Greg Frye',
      username: 'greg',
      password: 'password',
      email: 'gf@example.com',
      gender: 'male',
      location: 'fc894f58-21f1-440e-80a0-eac4404c8292',
      guid: v4()
    },

  ]

  return knex( tableName )
    //Empty the table
    .del()
    .then(function() {
      return knex.insert(rows).into(tableName)
    })
}
