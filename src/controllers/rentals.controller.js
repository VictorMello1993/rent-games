const createRentalService = require('../services/createRentalService')
const devolutionRentalService = require('../services/devolutionRentalService')

const cretateRental = (req, res, next) => {
  try {
    const { id } = req.user
    const { gameId, expirationDate } = req.body
  
    const result = createRentalService.execute({
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

const devolution = (req, res, next) => {
  try {
    const {id: userId} = req.user
    const {id} = req.params
  
    const result = devolutionRentalService.execute({
      id,
      userId
    })
  
    return res.status(200).json({message: 'Devolução realizada com sucesso', rental: result})

  } catch (error) {
    next(error)   
  }
}

module.exports = {
  cretateRental,
  devolution
}