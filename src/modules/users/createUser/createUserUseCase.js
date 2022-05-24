const {generateHash} = require('../../../utils/authHelpers')
const {dateTimeNow} = require('../../../utils/dateHelpers')
const db = require('../../../database/db');
const { v4: uuid } = require('uuid')

module.exports.execute = async ({ email, name, password, birthdate, telephone }) => {

  const user = db.users.find(user => user.email === email)

  if (user) {
    throw new Error('Usuário já existe com e-mail especificado.')
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
