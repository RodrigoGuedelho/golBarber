const express = require('express')
const multerConifg = require('./config/multer')
const upload = require('multer')(multerConifg)

const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  res.render('auth/dashboard')
})

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

module.exports = routes
