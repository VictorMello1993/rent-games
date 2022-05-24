const AppError = require('../errors/AppError')

module.exports = class JWTTokenMissingError extends AppError{
  constructor(){
    super('Usuário não está autorizado a realizar este tipo de operação', 401)       
  }
}
