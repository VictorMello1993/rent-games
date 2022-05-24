const db = require('../../../database/db')
const AppError = require('../../../utils/errors/AppError')
const { dateNow, compareInDays, dateTimeNow } = require('../../../utils/helpers/dateHelpers')


module.exports.execute = ({ id, userId }) => {
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