const AppError = require('../../../utils/errors/AppError')
const createRentalUseCase = require('./createRentalUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = (req, res, next) => {
  try {
    const { id } = req.user
    const { gameId, expirationDate } = req.body
  
    const result = createRentalUseCase.execute({
      userId: id,
      gameId,
      expirationDate
    })
    
    return res.status(200).json({
      message: 'Aluguel realizado com sucesso',
      rental: result
    })
    
  } catch (error) {
    next(error)   
  }
}