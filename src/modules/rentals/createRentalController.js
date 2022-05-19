const createRentalUseCase = require('./createRentalUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = (req, res) => {
  const {id}  = req.user
  const {game_id, expiration_date} = req.body

  const result = createRentalUseCase.execute({
    user_id: id,
    game_id,
    expiration_date
  })

  return res.status(201).json({message: 'Aluguel realizado com sucesso'})
}