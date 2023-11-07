require('dotenv').config()

// IMPORTS
const express = require('express')

// CONSTANTS
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hellooooo')
})

app.listen(PORT, () => console.log('listening at', PORT))