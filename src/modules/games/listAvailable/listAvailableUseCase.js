const db = require ('../../../database/db')

module.exports.execute = () => {
  const availableGames = db.games.filter(game => game.available)
  
  return availableGames
}