const {generateHash} = require('../../../utils/helpers')
const db = require('../../../database/db');
const {v4: uuid} = require('uuid')

exports.execute = async ({ email, name, password }) => {
  const user = db.users.find(user => user.email === email)

  if (user) {
    throw new Error('Usuário já existe com e-mail especificado.')
  }

  const hashedPassword = await generateHash(password)

  const newUser = Object.assign({id: uuid(), email, name, password: hashedPassword, admin: false, dataCadastro: new Date()}, user)

  db.users.push(newUser)

  return newUser
}
