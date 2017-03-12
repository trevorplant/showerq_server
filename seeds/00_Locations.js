
exports.seed = function(knex, Promise) {
  var tableName = 'locations'

  var rows = [
    {
      address: '620 Church st Richmond level 2',
      name: 'IRExchange',
      guid: 'fc894f58-21f1-440e-80a0-eac4404c8292'
    }
  ]

  return knex(tableName)
    .del() //Empty the table
    .then(function() {
      return knex.insert(rows).into(tableName)
    })
}

