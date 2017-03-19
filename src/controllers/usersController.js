import Knex from '../knex'
import jwt from 'jsonwebtoken'
import GUID from 'node-uuid'
import bcrypt from 'bcrypt'

export const login = (request, reply) => {
  const {username, password} = request.payload
  console.log('got %s, %s', username, password)
  const getOperation = Knex('users')
    .where({username})
    .select('guid', 'password')
    .then(([user]) => {
      if (!user) {
        reply({error: true, errMessage: 'the specified user was not found'})
        return
      }
      bcrypt
        .compare(password, user.password)
        .then(result => {
          if (result) {
            const token = jwt.sign({
              username,
              scope: user.guid
            }, 'yietyisViedcygOwnotvekcevchawespAckvisVagdiodnacolceaHyinnyaggOr9TwyghujcujMegri' +
                'atchOmNosgawt}On', {
              algorithm: 'HS256',
              expiresIn: '1h'
            })

            reply({token, scope: user.guid})
          } else {
            reply('incorrect password')
          }
        })
        .catch(err => {
          reply('server-side Oopsy')
        })
    })

}

export const getAllUsers = (request, reply) => {
  console.log(request.auth.credentials)
  console.log(request.payload)
  const getOperation = Knex('users')
    .select('name', 'gender', 'location')
    .then((results) => {
      if (!results || results.length === 0) {
        reply({error: true, errMessage: 'no users found'})
      }
      reply({dataCount: results.length, data: results})
    })
    .catch(err => {
      reply('server-side oops')
    })
}

export const addUser = (request, reply) => {
  const {name, username, email, gender, password, location} = request.payload
  console.log('got %s, %s, %s, %s,%s', name, email, gender, password, location)
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      reply('server-side encrypting error', err)
    }
    bcrypt.hash(password, salt, (err, encryptedPassword) => {
      if (err) {
        reply('server-side encrypting error', err)
      }
      Knex('users')
        .insert({name: name, username: username, email: email, gender: gender, password: encryptedPassword, location: location, guid: GUID.v4()})
        .then(results => {
          if (!results || results[0] <= 0) {
            reply({error: true, errMessage: 'unable to add user'})
          }
          reply('User added')
        })
        .catch(err => {
          console.error('Error ', err);
          reply('server-side oops', err)
        })
    })
  })

}