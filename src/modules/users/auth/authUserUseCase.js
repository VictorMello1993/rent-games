const db = require('../../../database/db')
const {compare} = require('bcrypt')
const {generateToken, generateHash} = require('../../../utils/helpers')

module.exports.execute = async ({email, password}) => {
  const user = db.users.find(user => user.email === email)

  if(!user){
    throw new Error('Usuário ou senha inválidos')
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
    throw new Error('Usuário ou senha inválidos')
  }
    
  const token = generateToken(user.id, user.email, user.name)

  return token
}