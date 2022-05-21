const Router = require('express')
const Joi = require('Joi').extend(require('@joi/date'))

const createRentalController = require('../modules/rentals/createRental/createRentalController')
const devolutionRentalController = require('../modules/rentals/devolutionRental/devolutionRentalController')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const validateInputData = require('../middlewares/validateInputData')

const rentalsRoutes = Router()

rentalsRoutes.post('/', ensureAuthenticated,
  validateInputData('body', {
    gameId: Joi.string().required().guid({
      version: [
        'uuidv4'
      ]
    }).messages({
      'string.empty': "É necessário preencher o id do jogo",
      'any.required': "É necessário preencher o id do jogo",
      'string.guid': "O id do jogo deve ser do tipo uuid"
    }),
    expirationDate: Joi.date().format('DD/MM/YYYY').required().messages({
      'any.required': "É necessário preencher a data de devolução",
      'date.format': `A data de devolução deve ser data válida "{#format}"`
    }),
  }), createRentalController.handle)

rentalsRoutes.put('/devolution/:id', ensureAuthenticated,
  validateInputData('params', {
    id: Joi.string().required().guid({
      version: [
        'uuidv4'
      ]
    }).messages({
      'string.empty': "É necessário preencher o id do aluguel na rota",
      'any.required': "É necessário preencher o id do aluguel na rota",
      'string.guid': "O id do jogo deve ser do tipo uuid"
    })
  }), devolutionRentalController.handle)

module.exports = rentalsRoutes