const createGameService = require('../services/createGameService')
const listAvailableService = require('../services/listAvailableService')

const createGame = (req, res, next) => {
  try {
    const { name, description, idGenre, releaseDate, dailyRate, fineAmount } = req.body

    const result = createGameService.execute({
      name,
      description, 
      idGenre, 
      releaseDate, 
      dailyRate, 
      fineAmount
    })

    return res.status(201).send(result)

  } catch (error) {
    next(error)
  }
}

const listAvailableGames = (req, res, next) => {
  const result = listAvailableService.execute()

  return res.json(result)
}

module.exports = {
  createGame,
  listAvailableGames
}