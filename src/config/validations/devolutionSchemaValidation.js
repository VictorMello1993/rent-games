const Joi = require('Joi')

module.exports = {
  id: Joi.string().required().guid({
    version: [
      'uuidv4'
    ]
  }).messages({
    'string.empty': "É necessário preencher o id do aluguel na rota",
    'any.required': "É necessário preencher o id do aluguel na rota",
    'string.guid': "O id do jogo deve ser do tipo uuid"
  })
}