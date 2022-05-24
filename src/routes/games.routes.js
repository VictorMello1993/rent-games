const Router = require('express')

const createGameController = require('../modules/games/createGame/createGameController')
const listAvailableController = require('../modules/games/listAvailable/listAvailableController')
const validateInputData = require('../middlewares/validateInputData')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const ensureAdmin = require('../middlewares/ensureAdmin')
const gameSchemaValidation = require('../config/validations/gameSchema')

const gamesRoutes = Router()

gamesRoutes.post('/', ensureAuthenticated, ensureAdmin,
  validateInputData('body', gameSchemaValidation), createGameController.handle)

gamesRoutes.get('/available', listAvailableController.handle)

module.exports = gamesRoutes
