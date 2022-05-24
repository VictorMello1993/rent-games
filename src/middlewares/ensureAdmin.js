const db = require('../database/db')
const UserNotFoundError = require('../utils/errors/UserNotFoundError')
const UserAdminError = require('../utils/errors/UserAdminError')

module.exports = (req, res, next) => {
  const {id}  = req.user

  const user = db.users.find(user => user.id === id)

  if(!user){
    throw new UserNotFoundError()
  }

  if(!user.admin){
    throw new UserAdminError()
  }

  return next()
}