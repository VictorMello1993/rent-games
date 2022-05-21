const Router = require('express')
const Joi = require('Joi').extend(require('@joi/date'))

const createGameController = require('../modules/games/createGame/createGameController')
const listAvailableController = require('../modules/games/listAvailable/listAvailableController')
const validateInputData = require('../middlewares/validateInputData')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const ensureAdmin = require('../middlewares/ensureAdmin')

const gamesRoutes = Router()

gamesRoutes.post('/', ensureAuthenticated, ensureAdmin,
  validateInputData('body', {
    name: Joi.string().required().max(50).messages({
      'string.empty': "É necessário preencher o nome",
      'string.max': "O nome não pode ultrapassar 50 caracteres",
      'any.required': "É necessário preencher o nome"
    }),
    description: Joi.string().required().max(100).messages({
      'string.empty': "É necessário preencher a descrição",
      'string.max': "A descrição não pode ultrapassar 100 caracteres",
      'any.required': "É necessário preencher a descrição"
    }),
    idGenre: Joi.number().required().messages({
      'any.required': "É necessário preencher o id do gênero",
      'number.base': "Id inválido"
    }),
    releaseDate: Joi.date().format('DD/MM/YYYY').required().messages({
      'any.required': "É necessário preencher a data de lançamento do jogo",
      'date.format': `A data de lançamento deve ser data válida "{#format}"`
    }),
    dailyRate: Joi.number().greater(0).required().messages({
      'any.required': "É necessário preencher o valor da diária",
      'number.base': "Valor inválido. O mesmo deve ser numérico",
      'number.greater': "O valor da diária deve ser positivo"
    }),
    fineAmount: Joi.number().greater(0).required().messages({
      'any.required': "É necessário preencher o valor da multa",
      'number.base': "Valor da multa inválido. O mesmo deve ser numérico",
      'number.greater': "O valor da multa deve ser positivo"
    }),
  }), createGameController.handle)

gamesRoutes.get('/available', listAvailableController.handle)

module.exports = gamesRoutes
