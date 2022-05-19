const createUserUseCase = require('../createUser/createUserUseCase')
const Joi = require('Joi').extend(require('@joi/date'))

module.exports.handle = async (req, res) => {
  const {email, password} = req.body
  
  const result = await createUserUseCase.execute({email, password})

  return res.status(201).send(result)
}
