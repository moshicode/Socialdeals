
const express = require('express')
const router = express.Router()
const User = require('../../models/User')

// All users
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        res.send(users)
    })
})

// Register User
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' })
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save()
                res.end()
            }
        })
})


router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.findOne({ username, password })
        .then(user => {
            if (!user) {
                console.log("Not found user")
                return res.status(404).json({ username: 'User not found' })
            } else {
                console.log(user)
                return res.status(200).send({
                    username: user.username,
                    id: user._id
                })
            }
        })
})



module.exports = router;
