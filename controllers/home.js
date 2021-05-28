const User = require('../models/User')
const List = require('../models/List')

module.exports = {
    getHome: (req, res) => {
        res.render('main.ejs')
    },
    getProfile: async (req, res) => {
        try {
            const list = await List.find({
                user: req.user.id
            }).lean()
            res.render('profile.ejs', {
                name: req.user.firstName, list
            })
        } catch (err) {
            console.error(err) // Create separate views/error/404 folder
        }
    }
}