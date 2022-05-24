const Joi = require('Joi').extend(require('@joi/date'))

const REGEX_PHONE = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/

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
  name: Joi.string().required().max(30).messages({
    'string.empty': "É necessário preencher o nome",
    'string.max': "O nome não pode ultrapassar 30 caracteres",
    'any.required': "É necessário preencher o nome"
  }),
  birthdate: Joi.date().format('DD/MM/YYYY').required().messages({
    'any.required': "É necessário preencher a data de nascimento",
    'date.format': `A data de nascimento deve ser data válida "{#format}"`
  }),
  telephone: Joi.string().pattern(REGEX_PHONE).required().messages({
    'string.empty': "É necessário preencher o número do telefone",
    'any.required': "É necessário preencher o número do telefone",
    'string.pattern.base': "Telefone inválido"
  })
}
 
 