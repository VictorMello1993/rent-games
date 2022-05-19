const createGameUseCase = require('../createGame/createGameUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

const createGameSchema = Joi.object({
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
    'any.required': "É necessário preencher a data de lançamento do jogo.",
    'date.format': `A data de lançamento deve ser data válida "{#format}"`
  }),
})

module.exports.createGameSchema = createGameSchema

module.exports.handle = (req, res) => {

  const result = createGameSchema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false
  })

  if(result.error){
    const messages = result.error.details.map(item => item.message)    
    return res.status(400).json({messages})
  }

  const {name, description, idGenre, releaseDate} = req.body

  const game = createGameUseCase.execute({name, description, idGenre, releaseDate})

  return res.status(201).send(game)
}