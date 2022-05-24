const AppError = require('../../../utils/errors/AppError')
const devolutionRentalUseCase = require('../devolutionRental/devolutionRentalUseCase')

module.exports.handle = (req, res, next) => {
  try {
    const {id: userId} = req.user
    const {id} = req.params
  
    const result = devolutionRentalUseCase.execute({
      id,
      userId
    })
  
    return res.status(200).json({message: 'Devolução realizada com sucesso', rental: result})

  } catch (error) {
    next(new AppError(error.message))   
  }
}