const mongoose = require('mongoose')
const states = require('./states.json')

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    default: "https://i.pinimg.com/originals/f3/0b/aa/f30baad5130286d75dad6f7fffecaa10.jpg"
  },
  cuisines: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    enum: states.map(({abbreviation}) => abbreviation)
  },
  founded: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Place', placeSchema)