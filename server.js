const express = require("express")
const mongoose = require('mongoose')
const Expert = require('./models/Expert')

mongoose.connect('mongodb://localhost/mini')
    .then(() => console.log('deb connected'))
    .catch((err) => console.log(err))


const app = express()


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.render('welcome', { name:'Sathwik', ok:true })
})
app.get('/about', (req, res) => {
    res.render('about')
})


// Routes
app.use('/expert', require('./routes/expert'))
app.use('/admin', require('./routes/admin'))

app.listen(3000, () => console.log('Server Started!'))