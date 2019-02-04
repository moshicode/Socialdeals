const express = require('express')
const router = express.Router()
const Deal = require('../../models/Deal')

// GET DEALS DATA FROM DB
router.get('/', function (req, res) {
    Deal.find({}, function (err, deals) {
        res.send(deals)
    })
})

// POST ROUTE
router.post('/', function (req, res) {
    let newDeal = new Deal(req.body)
    newDeal.save()
    res.end()
})

module.exports = router;