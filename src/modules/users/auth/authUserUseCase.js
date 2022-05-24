const db = require('../../../database/db')
const {compare} = require('bcrypt')
const {generateToken} = require('../../../utils/helpers/authHelpers')
const AppError = require('../../../utils/errors/AppError')

module.exports.execute = async ({email, password}) => {
  const user = db.users.find(user => user.email === email)

  if(!user){
    throw new AppError('Usuário ou senha inválidos')
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
    throw new AppError('Usuário ou senha inválidos')
  }
    
  const token = generateToken(user.id, user.email, user.name)

  return token
}