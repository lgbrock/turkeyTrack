const mongoose = require('mongoose')

const CalendarSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
      },
      description:{
        type: String,
      },
      startDate: {
        type: Date
      },
      EndDate: {
        type: Date
      }
})

module.exports = mongoose.model('Calendar', CalendarSchema)