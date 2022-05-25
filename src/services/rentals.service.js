const db = require('../database/db')
const { v4: uuid } = require('uuid')
const { compareInDays, dateNow, dateTimeNow } = require('../utils/helpers/dateHelpers')
const AppError = require('../utils/errors/AppError')

const createRental = async ({ userId, gameId, expirationDate }) => {
  const minimumDay = 7

  //Verificar se o jogo está indisponível para aluguel
  const gameUnavailable = db.rentals.find(rental => rental.gameId === gameId && !rental.endDate)

  if (gameUnavailable) {
    throw new AppError('Jogo indisponível para aluguel.')
  }

  //Verificar se o jogo já foi alugado por usuário
  const gameAlreadyRentByUser = db.rentals.find(rental => rental.userId === userId && !rental.endDate)

  if (gameAlreadyRentByUser) {
    throw new AppError('Jogo já foi alugado.')
  }

  //Verificando se a previsão de devolução do jogo está de acordo com a duração mínima do aluguel
  const current_date = dateNow()
  const compare = compareInDays(current_date, expirationDate)

  if (compare < minimumDay) {
    throw new AppError('Tempo de retorno inválido')
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

const devolution = async({ id, userId }) => {
  const rental = db.rentals.find(rental => rental.id === id)
  const game = db.games.find(game => game.id === rental.gameId)

  const minimumDay = 7

  if (!rental) {
    throw new AppError('Aluguel inexistente')
  }

  if (!game) {
    throw new AppError('Jogo não cadastrado')
  }

  const currentDate = dateNow()

  //Cálculo da diária (em dias)
  let daily = compareInDays(rental.startDate, currentDate)

  if (daily <= 0) {
    daily = minimumDay
  }

  //Obtendo os dias de atraso
  const delay = compareInDays(rental.expirationDate, currentDate)

  let total = 0

  //Obtendo a multa proporcional aos dias de atraso
  if(delay > 0){
    const fine = delay * game.fineAmount
    total = fine
  }

  //Total = diárias + multa
  total += daily * game.dailyRate

  rental.endDate = currentDate
  rental.total = total
  rental.updatedDate = dateTimeNow()

  //Atualizando o aluguel com o valor total e a data do término
  const rentalIndex = db.rentals.findIndex(rental => rental.id === rental.id)
  db.rentals[rentalIndex].endDate = rental.endDate
  db.rentals[rentalIndex].total = rental.total

  //Atualizando o status do jogo para disponível
  const gameIndex = db.games.findIndex(game => game.id === rental.gameId)
  db.games[gameIndex].available = true

  return rental
}

module.exports = {
  createRental,
  devolution
}