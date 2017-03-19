import Knex from './knex'
import jwt from 'jsonwebtoken'
import GUID from 'node-uuid'
import { login, getAllUsers, addUser } from './controllers/usersController'
import { allShowers } from './controllers/showersController'

const routes = [
  {
    method: 'GET',
    path: '/showers',
    handler: (request, reply) => allShowers(request, reply)
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, reply) => login(request, reply)
  },
  {
    method: 'GET',
    config: {
      auth: {
        strategy: 'token'
      }
    },
    path: '/users',
    handler: (request, reply) => getAllUsers(request, reply)
  },
  {
    method: 'PUT',
    path: '/register',
    handler: (request, reply) => addUser(request, reply)
  }
  // ,
  // {
  //   method: 'PUT',
  //   config: {
  //     auth: {
  //       strategy: 'token'
  //     },
  //     pre: [
  //       {
  //         method: (request, reply) => {
  //           const {birdGUID} = request.params
  //                 , {scope}  = request.auth.credentials

  //           const getOperation = Knex('birds').where({
  //             guid: birdGUID
  //           })
  //           .select('owner')
  //           .then(([result]) => {
  //             if(!result) {
  //               reply({
  //                 error: true,
  //                 errMessage: `this is not the bird you are looking for ${birdGUID}`
  //               })
  //               .takeover()
  //             }
  //             if (result.scope !== scope) {
  //               reply({
  //                 error: true,
  //                 errMessage: `the bird  ${birdGUID} is not yours`
  //               })
  //               .takeover()
  //             }
  //             return reply.continue()
  //           })
  //         }
  //       }
  //     ]
  //   },
  //   path: '/birds/{birdGUID}',
  //   handler: (request, reply) => {

  //     const  bird  = request.payload
  //     const  {birdGUID} = request.params
  //     console.log(bird)
  //     console.log(birdGUID)
  //     const insertOperation = Knex('birds').where({
  //       guid: birdGUID
  //     })
  //     .update({
  //       name: bird.name,
  //       species: bird.species,
  //       picture_url: bird.picture_url,
  //       isPublic: bird.isPublic === 'true',
  //     })
  //     .then(res => {
  //       reply({
  //         data: guid,
  //         message: 'successfully updated a bird'
  //       })
  //     }).catch(err => {
  //       reply(`server-side ba-bowww ${err}`)
  //     })
  //   }
  // }
]

export default routes