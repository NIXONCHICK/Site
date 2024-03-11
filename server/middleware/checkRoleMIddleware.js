const { doesNotMatch } = require('assert')

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(401).json({ message: 'Не авторизован' })
      }
      const decoded = verify(token, process.env.SECRET_KEY)
      if (decoded.role !== role) {
        res.status(401).json({ message: 'Нет доступа' })
      }
      req.user = decoded
      next()
    } catch (e) {
      res.status(401).json({ message: 'Не авторизован' })
    }
  }
}