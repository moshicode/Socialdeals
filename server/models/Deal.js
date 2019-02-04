const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Deal Schema
const DealSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
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
    },
    coupon: {
        type: String
    },
    dealEndDate: {
        type: Date
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

const Deal = mongoose.model("deal", DealSchema)
module.exports = Deal
