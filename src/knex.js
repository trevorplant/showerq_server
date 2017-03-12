export default require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',

    user: 'showerq',
    password: 'password',
    database: 'showerq',
    charset: 'utf8'
  }
})