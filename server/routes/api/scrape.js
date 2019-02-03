const express = require('express')
const router = express.Router()
const Helpers = require('../../scrapeHelpers');

// GET SCRAPED DATA FROM URL
router.post('/', async function (req, res) {
    let url = req.body.url.toLowerCase()
    let siteName = await Helpers.checkLegitimateUrl(url)
    res.send(siteName)
})

module.exports = router;