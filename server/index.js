require('dotenv').config()

// IMPORTS
const express = require('express')
const methodOverride = require('method-override')
const placesController = require('./controllers/places')

// CONSTANTS
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('dist'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// ROUTES & CONTROLLERS
app.use('/api/places', placesController)

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname })
})

// START SERVER
app.listen(PORT, () => console.log('listening at', PORT))






// server proxy during development
// /api all your api routes
// make sure all your api calls from your front end are /api and not https://whatever
// setup all non-api routes to go to your front end (aka the sendFile thing)
// serve the dist folder static files
