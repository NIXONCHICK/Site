const { Router } = require('express')
const { create, getAll } = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMIddleware')

const router = Router()

router.post('/', checkRole('ADMIN'), create)
router.get('/', getAll)

module.exports = router
