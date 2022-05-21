const createRentalUseCase = require('./createRentalUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = (req, res) => {
  const {id}  = req.user
  const {gameId, expirationDate} = req.body

  const result = createRentalUseCase.execute({
    userId: id,
    gameId,
    expirationDate
  })

  console.log(result)

  return res.status(201).json({message: 'Aluguel realizado com sucesso'})
}