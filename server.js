const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const deals = require('./server/routes/api/deals')
const users = require('./server/routes/api/users')
const scrape = require('./server/routes/api/scrape')
const currencies = require('./server/routes/api/currencies')


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialdeals');

const app = express();
app.use(express.static(path.join(__dirname, 'client/src')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/deals', deals)
app.use('/api/users', users)
app.use('/api/scrape', scrape)
app.use('/api/currencies', currencies)

app.use(express.static('client/build'))

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))