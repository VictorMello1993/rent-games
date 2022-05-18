const Router = require('Router')

const usersRoutes = require('./users.routes')
const gamesRoutes = require('./games.routes')
const rentalsRoutes = require('./rentals.routes')

const router = Router()

router.use('/users', usersRoutes)
router.use('/games', gamesRoutes)
router.use('/rentals', rentalsRoutes)

module.exports = router