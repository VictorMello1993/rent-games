const db = require('../../database/db')
const { v4: uuid } = require('uuid')
const { compareInHours, dateNow } = require('../../utils/helpers')

module.exports.execute = async ({ user_id, game_id, expiration_date }) => {
  const minimumHour = 168 //7 dias = 168 horas

  //Verificar se o jogo está indisponível para aluguel
  const gameUnavailable = db.rentals.find(rental => rental.game_id === game_id && !end_date)

  if (gameUnavailable) {
    throw new Error('Jogo indisponível para aluguel.')
  }

  //Verificar se o jogo já foi alugado por usuário
  const gameAlreadyRentByUser = db.rentals.find(rental => rental.user_id === user_id && !end_date)

  if (gameAlreadyRentByUser) {
    throw new Error('Jogo já foi alugado.')
  }

  //Verificando se a previsão de devolução do jogo está de acordo com a duração mínima do aluguel
  const current_date = dateNow()
  const compare = compareInHours(current_date, expiration_date)
  
  if (compare < minimumHour) {
    throw new Error('Tempo de retorno inválido')
  }

  const index = db.games.findIndex(game => game.id === game_id)
  
  //Ao alugar um jogo, o sistema deve atualizar o status para indisponível
  db.games[index].available = false

  return {
    id: uuid(),
    user_id,
    game_id,
    expiration_date,
    end_date: null,
    total: null
  }
}