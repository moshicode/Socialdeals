const express = require('express')
const router = express.Router()
// const scrapeManager = require('../scrapeManager');
const Deal = require('../models/Deal')
const Helpers = require('../scrapeHelpers');

router.get('/sanity', function (req, res) {
    res.send("server is working")
})

// GET SCRAPED DATA FROM URL
router.post('/scrape', async function (req, res) {
    let url = req.body.url.toLowerCase()
    let siteName = await Helpers.checkLegitimateUrl(url)
    res.send(siteName)
})

// GET DEALS DATA FROM DB
router.get('/deals', function (req, res) {
    Deal.find({}, function (err, deals) {
        res.send(deals)
    })
})

// POST ROUTE
router.post('/deals', function (req, res) {
    let c = new Deal(req.body)
    console.log(c)
    c.save()
    res.end()
})

module.exports = router;
