const AppError = require('../../../utils/errors/AppError')
const createGameUseCase = require('../createGame/createGameUseCase')

module.exports.handle = (req, res, next) => {
  try {
    const {name, description, idGenre, releaseDate, dailyRate, fineAmount} = req.body
  
    const result = createGameUseCase.execute({name, description, idGenre, releaseDate, dailyRate, fineAmount})
  
    return res.status(201).send(result)
        
  } catch (error) {
    next(error)
  }
}