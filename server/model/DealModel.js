const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dealSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true }
})

const Deal = mongoose.model("Deal", dealSchema)
module.exports = Deal
