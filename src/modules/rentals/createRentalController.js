const createRentalUseCase = require('./createRentalUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

const createRentalSchema = Joi.object({
  game_id: Joi.string().required().guid({
    version: [
      'uuidv4'
    ]
  }).messages({
    'string.empty': "É necessário preencher o id do jogo",
    'any.required': "É necessário preencher o id do jogo",
    'string.guid': "O id deve ser do tipo uuid"
  }),
  expiration_date: Joi.date().format('DD/MM/YYYY').required().messages({
    'any.required': "É necessário preencher a data de devolução",
    'date.format': `A data de devolução deve ser data válida "{#format}"`
  }),
})

module.exports.createRentalSchema = createRentalSchema

module.exports.handle = (req, res) => {
  const result = createRentalSchema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false
  })

  if(result.error){
    const messages = result.error.details.map(item => item.message)    
    return res.status(400).json({messages})
  }

  const {id}  = req.user
  const {game_id, expiration_date} = req.body

  const rental = createRentalUseCase.execute({
    user_id: id,
    game_id,
    expiration_date
  })

  return res.status(201).json({message: 'Aluguel realizado com sucesso'})
}