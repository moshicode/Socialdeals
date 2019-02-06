const express = require('express')
const router = express.Router()
const Deal = require('../../models/Deal')

// GET DEALS DATA FROM DB SORT BY DATE
router.get('/', function (req, res) {
    Deal.find({}).sort({ date: -1 }).exec(function (err, deals) {
        res.send(deals)
    });
})

// POST ROUTE
router.post('/', function (req, res) {
    let newDeal = new Deal({
        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        currency: req.body.currency,
        url: req.body.url,
        username: req.body.username
    })

    console.log(newDeal)
    newDeal.save()
    res.end()
})



const userLikesDeal = function (userID, deal) {
    return deal.likes.id(userID)
}

// LIKE ROUTE
router.post('/like/:dealID/:userID', async function (req, res) {

    let userID = req.params.userID
    let deal = await Deal.findById(req.params.dealID)

    if (userLikesDeal(userID, deal)) {
        deal.likes.splice(deal.likes.indexOf(u => u === userID), 1)
    }
    else {
        deal.likes.push(userID)
    }

    deal.save()
    res.end()
})

module.exports = router;