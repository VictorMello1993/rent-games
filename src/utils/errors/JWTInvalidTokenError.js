const AppError = require('./AppError')

module.exports = class JWTInvalidTokenError extends AppError {
  constructor() {
    super('Token inválido', 401)        
  }
}