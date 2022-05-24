const createUserUseCase = require('../createUser/createUserUseCase')

module.exports.handle = async (req, res) => {
  const {email, password, name, birthdate, telephone} = req.body
  
  const result = await createUserUseCase.execute({email, name, password, birthdate, telephone})

  return res.status(200).send(result)
}
