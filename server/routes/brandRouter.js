const { Router } = require('express')
const { create, getAll } = require('../controllers/brandController')

const router = Router()

router.post('/', create)
router.get('/', getAll)

module.exports = router
