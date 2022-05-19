const Joi = require('Joi')

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
        return res.status(400).json({messages})
      }

      next()

    } catch (error) {
      console.log(error)
    }
  }
}