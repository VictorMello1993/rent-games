const createUserUseCase = require('../createUser/createUserUseCase')

exports.handle = async (req, res) => {
  const {email, password} = req.body

  const result = await createUserUseCase.execute({email, password})

  return res.status(201).send(result)
}
