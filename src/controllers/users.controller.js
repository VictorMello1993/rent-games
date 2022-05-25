const usersService = require('../services/users.service')

const createUser = async (req, res, next) => {
  try {
    const {email, password, name, birthdate, telephone} = req.body
    
    const result = await usersService.createUser({email, name, password, birthdate, telephone})
  
    return res.status(200).send(result)

  } catch (error) {
    next(error)
  }
}

const authUser = async (req, res, next) => {
  try {
    const {email, password} = req.body
  
    const result = await usersService.authUser({email, password})
  
    return res.status(200).send(result)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  createUser,
  authUser
}