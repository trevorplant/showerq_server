module.exports ={
  development: {
    migrations: { tableName: 'knex_migrations'},
    seeds: {tableName: './seeds'},
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'showerq',
      password: 'password',
      database: 'showerq',
      charset: 'utf8',
    }
  }
}