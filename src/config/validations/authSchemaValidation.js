const Joi = require('Joi')

module.exports = {
  email: Joi.string().email().required().messages({
    'string.empty': "É necessário preencher o e-mail",
    'string.email': "E-mail inválido",
    'any.required': "É necessário preencher o e-mail"
  }),
  password: Joi.string().required().min(5).messages({
    'string.empty': "É necessário preencher a senha",
    'string.min': "A senha deve possuir pelo menos 5 caracteres",
    'any.required': "É necessário preencher a senha"
  }),
}