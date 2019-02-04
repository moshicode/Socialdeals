const express = require('express')
const router = express.Router()
const request = require('request')

router.get('/:fromCurrency/:toCurrency', function (req, res) {
    let fromCurrency = req.params.fromCurrency
    let toCurrency = req.params.toCurrency
    request(`http://free.currencyconverterapi.com/api/v6/convert?q=${fromCurrency}_${toCurrency}&compact=y`,
        function (err, response, body) {
            const obj = JSON.parse(body)
            res.send(obj)
        })
})

module.exports = router;