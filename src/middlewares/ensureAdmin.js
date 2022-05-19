const db = require('../database/db')

module.exports = (req, res, next) => {
  const {id}  = req.user

  const user = db.users.find(user => user.id === id)

  if(!user){
    return res.status(400).json({message: 'Usuário não cadastrado.'})
  }

  if(!user.admin){
    return res.status(400).json({message: 'Usuário não é administrador.'})
  }

  return next()
}