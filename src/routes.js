const Router = require('express')

const createUserController = require('./modules/users/createUser/createUserUseCaseController')
const authUserController = require('./modules/users/auth/authUserController')

const routes = Router()

routes.post('/users', createUserController.handle)
routes.post('/users/login', authUserController.handle)

module.exports = routes