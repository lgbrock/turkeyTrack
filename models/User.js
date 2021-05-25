const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: { 
        type: String,
        unique: true
    },
    bio: { 
        type: String
    },
    id: {
        type: Number
    },
    password: {
        type : String
    }
})

module.exports = mongoose.model('User', UserSchema)