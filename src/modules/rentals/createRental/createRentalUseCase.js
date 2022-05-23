const db = require('../../../database/db')
const { v4: uuid } = require('uuid')
const { compareInDays, dateNow, dateTimeNow } = require('../../../utils/helpers')

module.exports.execute = ({ userId, gameId, expirationDate }) => {
  const minimumDay = 7

  //Verificar se o jogo já foi alugado
  const gameUnavailable = db.rentals.find(rental => rental.gameId === gameId && !rental.endDate)

  if (gameUnavailable) {
    throw new Error('Jogo indisponível para aluguel.')
  }

  //Verificar se o jogo já foi alugado por usuário
  const gameAlreadyRentByUser = db.rentals.find(rental => rental.userId === userId && !rental.endDate)

  if (gameAlreadyRentByUser) {
    throw new Error('Jogo já foi alugado.')
  }

  //Verificando se a previsão de devolução do jogo está de acordo com a duração mínima do aluguel
  const current_date = dateNow()
  const compare = compareInDays(current_date, expirationDate)

  if (compare < minimumDay) {
    throw new Error('Tempo de retorno inválido')
  }

  const rental = Object.assign({
    id: uuid(),
    userId,
    gameId,
    expirationDate,
    endDate: null,
    total: null,
    startDate: dateNow(),
    updatedDate: dateTimeNow(),
  }, gameUnavailable)

  db.rentals.push(rental)

  const index = db.games.findIndex(game => game.id === gameId)

  //Ao alugar um jogo, o sistema deve atualizar o status para indisponível
  db.games[index].available = false

  return rental
}