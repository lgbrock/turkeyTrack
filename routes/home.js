// Calling our dependencies
const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Import Home Controller
const homeController = require('../controllers/home')

// Get Request to the '/'  - route will be handed off to the homeController's getHome method to the Login Page - main.ejs
router.get('/', ensureGuest, homeController.getHome);

// Gets profile Page. Successful Auth Login will redirect to this GET request
router.get('/profile', ensureAuth, homeController.getProfile)

// Gets timer Page. Successful Auth Login will redirect to this GET request
router.get('/timer', ensureAuth, homeController.getTimer)

// Gets task Page. Successful Auth Login will redirect to this GET request
router.get('/task', ensureAuth, homeController.getTask)

// Gets calendar Page. Successful Auth Login will redirect to this GET request
router.get('/calendar', ensureAuth, homeController.getCalender)

// Exporting router
module.exports = router;