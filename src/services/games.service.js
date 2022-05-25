const db = require('../database/db')
const { v4: uuid } = require('uuid')
const AppError = require('../utils/errors/AppError')

const createGame = async ({ name, description, idGenre, releaseDate, fineAmount, dailyRate }) => {
  const game = db.games.find(game => game.name === name)

  if (game) {
    throw new AppError('Jogo já existe com nome especificado.')
  }

  const genre = db.genres.find(genre => genre.id === idGenre)

  if (!genre) {
    throw new AppError('Gênero inválido.')
  }

  const newGame = Object.assign({
    id: uuid(),
    name,
    description,
    idGenre,
    releaseDate,
    available: true,
    dailyRate,
    fineAmount
  }, game)

  db.games.push(newGame)

  return newGame
}

const listGamesAvailable = async () => {
  const availableGames = db.games.filter(game => game.available)
  return availableGames
}

module.exports = {
  createGame,
  listGamesAvailable
}