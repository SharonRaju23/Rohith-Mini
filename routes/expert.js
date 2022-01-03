const express = require("express")
const Expert = require('../models/Expert')

const router = express.Router()

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { fname, lname, email, dateOfBirth, phoneNumber, aadhaarNumber, educationQualification, experience, sex, city, state, zip } = req.body

    const expert = new Expert({
        name: {
            firstName: fname,
            lastName: lname
        },
        email, 
        dateOfBirth, 
        phoneNumber, 
        aadhaarNumber, 
        educationQualification,
        experience, 
        sex, 
        address: {
            city, 
            state, 
            zip
        }
    })

    expert.save()
        .then((user) => {
            res.render('success')
        })
        .catch((err) => {console.log(err)
            res.render('register')})

})

module.exports = router