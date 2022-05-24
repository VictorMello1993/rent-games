const Joi = require('Joi')
const AppError = require('../utils/errors/AppError')

module.exports = (type, params) => {
  return (req, res, next) => {
    try {
      const schema = Joi.object().keys(params)

      const {error} = schema.validate(req[type], {
        allowUnknown: false,
        abortEarly: false
      })      

      if(error){
        const messages = error.details.map(item => item.message)      
        next(new AppError(messages))
      }

      next()

    } catch (error) {
      console.log(error)
    }
  }
}