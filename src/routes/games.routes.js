const Router = require('express')

const createGameController = require('../modules/games/createGame/createGameController')
const listAvailableController = require('../modules/games/listAvailable/listAvailableController')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const ensureAdmin = require('../middlewares/ensureAdmin')

const gamesRoutes = Router()

gamesRoutes.post('/', ensureAuthenticated, ensureAdmin, createGameController.handle)
gamesRoutes.get('/available', listAvailableController.handle)

