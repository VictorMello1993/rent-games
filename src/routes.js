const Router = require('express')

const createUserController = require('./modules/users/createUser/createUserUseCaseController')
const authUserController = require('./modules/users/auth/authUserController')
const createGameController = require('./modules/games/createGame/createGameController')
const listAvailableController = require('./modules/games/listAvailable/listAvailableController')

const routes = Router()

routes.post('/users', createUserController.handle)
routes.post('/users/login', authUserController.handle)
routes.post('/games', createGameController.handle)
routes.get('/games/available', listAvailableController.handle)

module.exports = routes