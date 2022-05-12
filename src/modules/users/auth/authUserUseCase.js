const db = require('../../../database/db')
const {compare} = require('bcrypt')
const {sign} = require('jsonwebtoken')

exports.execute = async ({email, password}) => {
  
  const user = db.users.find(user => user.email === email)

  if(!user){
    throw new Error('Usuário ou senha inválidos')
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
    throw new Error('Usuário ou senha inválidos')
  }
  
  const token = sign({email}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: '1d'
  })

  return token
}