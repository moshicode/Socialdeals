const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Deal Schema
const DealSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


// const dealSchema = new Schema({
//     title: { type: String, required: true },
//     price: { type: Number, required: true },
//     currency: { type: String, required: true },
//     url: { type: String, required: true },
//     image: { type: String, required: true }
// })

const Deal = mongoose.model("deal", DealSchema)
module.exports = Deal
