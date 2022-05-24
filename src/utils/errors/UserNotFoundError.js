const AppError = require("./AppError");

module.exports = class UserNotFoundError extends AppError {
  constructor(){
    super('Usuário não cadastrado')
  }
}