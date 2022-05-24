const Router = require('express')

const createUserController = require('../modules/users/createUser/createUserController')
const authUserController = require('../modules/users/auth/authUserController')
const validateInputData = require('../middlewares/validateInputData')
const userSchemaValidation = require('../config/validations/userSchemaValidation')
const authSchemaValidation = require('../config/validations/authSchemaValidation')

const usersRoutes = Router()

usersRoutes.post('/', validateInputData('body', userSchemaValidation), createUserController.handle)
usersRoutes.post('/login', validateInputData('body', authSchemaValidation), authUserController.handle)

module.exports = usersRoutes
