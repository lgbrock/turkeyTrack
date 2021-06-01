const User = require('../models/User')
const List = require('../models/List')
const Task = require('../models/Task')
const Calendar = require('../models/Calendar')

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
    },
    getTimer: async (req, res) => {
        try {
            const task = await Task.find({
                user: req.user.id
            }).lean()
            res.render('timer.ejs', {
                name: req.user.firstName, task
            })
        } catch (err) {
            console.error(err) // Create separate views/error/404 folder
        }
    },
    getTask: async (req, res) => {
        try {

        } catch (err) {

        }
        res.render('task.ejs')
    },
    getCalender: async (req, res) => {
        try {

        } catch (err) {

        }
        res.render('calendar.ejs')
    },
}