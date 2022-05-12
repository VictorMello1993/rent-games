const db = require('../../../database/db')
const {v4: uuid} = require('uuid')

exports.execute = ({name, description, idGenre, releaseDate}) => {
  const game = db.games.find(game => game.name === name)

  if(game){
    throw new Error('Jogo já existe com nome especificado.')
  }

  const genre = db.genres.find(genre => genre.id === idGenre)

  if(!genre){
    throw new Error('Gênero inválido.')
  }

  const newGame = Object.assign({id: uuid(), name, description, idGenre, releaseDate, available: true}, game)

  db.games.push(newGame)

  return newGame
}