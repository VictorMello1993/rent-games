const AppError = require('./AppError')

module.exports = class JWTBadFormattedTokenError extends AppError {
  constructor() {
    super('Token mal formatado', 401)    
  }
}