const Router = require('express')

const createUserController = require('./modules/users/createUser/createUserUseCaseController')
const authUserController = require('./modules/users/auth/authUserController')
const createGameController = require('./modules/games/createGame/createGameController')
const listAvailableController = require('./modules/games/listAvailable/listAvailableController')
const ensureAuthenticated = require('./middlewares/ensureAuthenticated')
const ensureAdmin = require('./middlewares/ensureAdmin')
const createRentalController = require('./modules/rentals/createRentalController')

const routes = Router()

routes.post('/users', createUserController.handle)
routes.post('/users/login', authUserController.handle)
routes.post('/games', ensureAuthenticated, ensureAdmin, createGameController.handle)
routes.get('/games/available', listAvailableController.handle)
routes.post('/rentals', ensureAuthenticated, createRentalController.handle)

module.exports = routes