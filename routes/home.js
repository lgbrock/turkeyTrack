// Calling our dependencies
const express = require('express')
const router = express.Router()

// Import Home Controller
const homeController = require('../controllers/home')

//Get Request to the '/' route will be handed off to the homeController's getHome method
router.get('/', homeController.getHome);

// Exporting router
module.exports = router;