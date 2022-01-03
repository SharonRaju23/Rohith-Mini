const mongoose = require('mongoose')

const expertSchema = new mongoose.Schema({
    name: {
        type: {
            firstName: String,
            lastName: String
        },
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        // required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    aadhaarNumber: {
        type: Number,
        required: true
    },
    educationQualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    address: {
        type: {
            city: String,
            state: String,
            zip: Number
        },
        required: true
    }
})

module.exports = mongoose.model('Expert', expertSchema)