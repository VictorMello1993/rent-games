const Router = require('express')

const gamesController = require('../controllers/games.controller')
const validateInputData = require('../middlewares/validateInputData')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const ensureAdmin = require('../middlewares/ensureAdmin')
const gameSchemaValidation = require('../config/validations/gameSchema')

const gamesRoutes = Router()

gamesRoutes.post('/', ensureAuthenticated, ensureAdmin,
  validateInputData('body', gameSchemaValidation), gamesController.createGame)

gamesRoutes.get('/available', gamesController.listAvailableGames)

module.exports = gamesRoutes
