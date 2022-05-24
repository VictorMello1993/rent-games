const Joi = require('Joi').extend(require('@joi/date'))

module.exports = {
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
}