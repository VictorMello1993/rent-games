const authUserUseCase = require('../auth/authUserUseCase')

module.exports.handle = async (req, res) => {
  const {email, password} = req.body

  const result = await authUserUseCase.execute({email, password})

  return res.json(result)
}