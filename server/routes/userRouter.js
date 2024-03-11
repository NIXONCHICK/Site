const { Router } = require('express')
const { registration, login, check } = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const router = Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', authMiddleware, check)

module.exports = router
