import Knex from '../knex'

export const allShowers = (request, reply) => {
  const getOperation = Knex('showers')
        .select('name', 'gender')
        .then((results) => {
          if (!results || results.length === 0) {
            reply({
              error: true,
              errMessage: 'no showers found'
            })
          }
          reply({
            dataCount: results.length,
            data: results
          })
        }).catch(err => {
          reply('server-side oops')
        })

}