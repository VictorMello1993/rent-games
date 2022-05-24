const AppError = require('./AppError')

module.exports = class JWTAuthorizationInvalidError extends AppError {
  constructor() {
    super('Tipo de autorização inválida', 401)        
  }
}