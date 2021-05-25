const User = require('../models/User')

module.exports = {
    getHome: (req, res) => {
        res.render('main.ejs')
    }
}