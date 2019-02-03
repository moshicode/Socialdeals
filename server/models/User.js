const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create User Schema
const UserSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("user", UserSchema)
module.exports = User
