const AppError = require("./AppError");

module.exports = class UserAdminError extends AppError {
  constructor(){
    super('Usuário não é administrador')
  }
}