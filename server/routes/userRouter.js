const { Router } = require('express')
const { registration, login, check } = require('../controllers/userController')

const router = Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', check)

module.exports = router
