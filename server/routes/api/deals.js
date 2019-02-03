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
    let c = new Deal(req.body)
    console.log(c)
    c.save()
    res.end()
})

module.exports = router;
