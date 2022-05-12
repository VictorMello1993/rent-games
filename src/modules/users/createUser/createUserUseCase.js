const { hash } = require('bcrypt');
const db = require('../../../database/db');
const {v4: uuid} = require('uuid')

exports.execute = async ({ email, password }) => {
  const user = db.users.find(user => user.email === email)

  if (user) {
    throw new Error('Usuário já existe com e-mail especificado.')
  }

  const hashedPassword = await hash(password, 10)

  const newUser = Object.assign({id: uuid(), email, password: hashedPassword, admin: false, dataCadastro: new Date()}, user)

  db.users.push(newUser)

  return newUser
}
