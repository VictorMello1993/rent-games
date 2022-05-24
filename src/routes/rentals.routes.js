const Router = require('express')

const rentalsController = require('../controllers/rentals.controller')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const validateInputData = require('../middlewares/validateInputData')
const rentalSchemaValidation = require('../config/validations/rentalSchemaValidation')
const devolutionSchemaValidation = require('../config/validations/devolutionSchemaValidation')

const rentalsRoutes = Router()

rentalsRoutes.post('/',
  ensureAuthenticated,
  validateInputData('body', rentalSchemaValidation),
  rentalsController.cretateRental)

rentalsRoutes.put('/devolution/:id', ensureAuthenticated,
  validateInputData('params', devolutionSchemaValidation), rentalsController.devolution)

module.exports = rentalsRoutes