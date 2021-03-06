const {generateHash, generateToken} = require('../utils/helpers/authHelpers')
const {dateTimeNow} = require('../utils/helpers/dateHelpers')
const db = require('../database/db');
const { v4: uuid } = require('uuid')
const AppError = require('../utils/errors/AppError')
const {compare} = require('bcrypt')

const createUser = async ({ email, name, password, birthdate, telephone }) => {

  const user = db.users.find(user => user.email === email)

  if (user) {
    throw new AppError('Já existe usuário com e-mail especificado')
  }

  const hashedPassword = await generateHash(password)

  const newUser = Object.assign({
    id: uuid(), 
    email, 
    name, 
    password: hashedPassword, 
    admin: false, 
    createdAt: dateTimeNow(),
    birthdate,
    telephone
  }, user)

  db.users.push(newUser)

  return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    admin: newUser.admin,
    createdAt: newUser.createdAt,
    birthdate: newUser.birthdate,
    telephone: newUser.telephone
  }
}

const authUser = async ({email, password}) => {
  const user = db.users.find(user => user.email === email)

  if(!user){
    throw new AppError('Usuário ou senha inválidos', 401)
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
    throw new AppError('Usuário ou senha inválidos', 401)
  }
    
  const token = generateToken(user.id, user.email, user.name)

  return token
}

module.exports = {
  createUser,
  authUser
}