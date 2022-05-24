const Router = require('express')

const createRentalController = require('../modules/rentals/createRental/createRentalController')
const devolutionRentalController = require('../modules/rentals/devolutionRental/devolutionRentalController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const validateInputData = require('../middlewares/validateInputData')
const rentalSchemaValidation = require('../config/validations/rentalSchemaValidation')
const devolutionSchemaValidation = require('../config/validations/devolutionSchemaValidation')

const rentalsRoutes = Router()

rentalsRoutes.post('/',
  ensureAuthenticated,
  validateInputData('body', rentalSchemaValidation),
  createRentalController.handle)

rentalsRoutes.put('/devolution/:id', ensureAuthenticated,
  validateInputData('params', devolutionSchemaValidation), devolutionRentalController.handle)

module.exports = rentalsRoutes