const db = require ('../../../database/db')

exports.execute = () => {
  const availableGames = db.games.filter(game => game.available)

  return availableGames
}