const Router = require('express')

const createUserController = require('../modules/users/createUser/createUserUseCaseController')
const authUserController = require('../modules/users/auth/authUserController')

const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/login', authUserController.handle)
