const createGameUseCase = require('../createGame/createGameUseCase')

exports.handle = (req, res) => {
  const {name, description, idGenre, releaseDate} = req.body

  const result = createGameUseCase.execute({name, description, idGenre, releaseDate})

  return res.status(201).send(result)
}