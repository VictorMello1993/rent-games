const createGameUseCase = require('../createGame/createGameUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = (req, res) => {
  const {name, description, idGenre, releaseDate, daily_rate, fine_amount} = req.body

  const result = createGameUseCase.execute({name, description, idGenre, releaseDate, daily_rate, fine_amount})

  return res.status(201).send(result)
}