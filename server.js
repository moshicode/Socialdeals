// Server Setup
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const deals = require('./server/routes/api/deals')
const users = require('./server/routes/api/users')
const scrape = require('./server/routes/api/scrape')
const currencies = require('./server/routes/api/currencies')


// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/');

const app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/api/deals', deals)
app.use('/api/users', users)
app.use('/api/scrape', scrape)
app.use('/api/currencies', currencies)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 8080
app.listen(process.env.PORT || PORT);
