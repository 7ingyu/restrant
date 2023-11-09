require('dotenv').config()

// IMPORTS
const express = require('express')
const placesController = require('./controllers/places')

// CONSTANTS
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES & CONTROLLERS
app.get('/', (req, res) => {
  res.render('home')
})

app.use('/places', placesController)

app.get('*', (req, res) => {
  res.status(404).render('notfound')
})

app.listen(PORT, () => console.log('listening at', PORT))