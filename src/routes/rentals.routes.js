const Router = require('express')

const createRentalController = require('../modules/rentals/createRentalController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const rentalsRoutes = Router()

rentalsRoutes.post('/', ensureAuthenticated, createRentalController.handle)

module.exports = rentalsRoutes