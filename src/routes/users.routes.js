const Router = require('express')

const usersController = require('../controllers/users.controller')
const validateInputData = require('../middlewares/validateInputData')
const userSchemaValidation = require('../config/validations/userSchemaValidation')
const authSchemaValidation = require('../config/validations/authSchemaValidation')

const usersRoutes = Router()

usersRoutes.post('/', validateInputData('body', userSchemaValidation), usersController.createUser)
usersRoutes.post('/login', validateInputData('body', authSchemaValidation), usersController.authUser)

module.exports = usersRoutes
