const createGameUseCase = require('../createGame/createGameUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = (req, res) => {
  const {name, description, idGenre, releaseDate} = req.body

  const result = createGameUseCase.execute({name, description, idGenre, releaseDate})

  return res.status(201).send(result)
}