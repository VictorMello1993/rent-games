const AppError = require('../utils/errors/AppError')

module.exports = (err, req, res, next) => {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      messages: err.message.includes(',') ? err.messages : err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}