const express = require('express')
const Expert = require('../models/Expert')

const router = express.Router()
router.use(express.static('public'))


router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {

    const { username, password } = req.body

    if(username === 'Rohith Reddy' && password === 'password') {

        Expert.find({}, (err, experts) => {
            res.render('adminProfile', {experts})
        })

    } else {
        res.render('login')
    }
})

module.exports = router