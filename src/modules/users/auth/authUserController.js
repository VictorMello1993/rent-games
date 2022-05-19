const authUserUseCase = require('../auth/authUserUseCase')
const Joi = require('Joi')

const authUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': "É necessário preencher o e-mail",
    'string.email': "E-mail inválido",
    'any.required': "É necessário preencher o e-mail"
  }),
  password: Joi.string().required().min(8).messages({
    'string.empty': "É necessário preencher a senha",
    'string.min': "A senha deve possuir 8 caracteres",
    'any.required': "É necessário preencher a senha"
  }),
})

module.exports.authUserSchema = authUserSchema

module.exports.handle = async (req, res) => {
  const result = authUserSchema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false
  })

  if(result.error){
    const messages = result.error.details.map(item => item.message)    
    return res.status(400).json({messages})
  }

  const {email, password} = req.body

  const token = await authUserUseCase.execute({email, password})

  return res.json(token)
}