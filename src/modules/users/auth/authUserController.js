const authUserUseCase = require('../auth/authUserUseCase')
const Joi = require('Joi')

module.exports.handle = async (req, res) => {
  const {email, password} = req.body

  const result = await authUserUseCase.execute({email, password})

  return res.status(200).send(result)
}