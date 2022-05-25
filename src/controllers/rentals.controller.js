const rentalsService = require('../services/rentals.service')

const cretateRental = async (req, res, next) => {
  try {
    const { id } = req.user
    const { gameId, expirationDate } = req.body
  
    const result = await rentalsService.createRental({
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

const devolution = async (req, res, next) => {
  try {
    const {id: userId} = req.user
    const {id} = req.params
  
    const result = await rentalsService.devolution({
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