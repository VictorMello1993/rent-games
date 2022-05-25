const gamesService = require('../services/games.service')

const createGame = async (req, res, next) => {
  try {
    const { name, description, idGenre, releaseDate, dailyRate, fineAmount } = req.body

    const result = await gamesService.createGame({
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

const listAvailableGames = async (req, res, next) => {
  const result = await gamesService.listGamesAvailable()
  return res.json(result)
}

module.exports = {
  createGame,
  listAvailableGames
}