require('dotenv').config()

// IMPORTS
const express = require('express')

// CONSTANTS
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hellooooo')
})

app.get('*', (req, res) => {
  res.status(404).send('<h1>404: Page not found</h1>')
})

app.listen(PORT, () => console.log('listening at', PORT))