const mongoose = require('mongoose')
const states = require('./states.json')

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    default: 'Anonymous'
  },
  rant: {
    type: Boolean,
    required: true
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  content: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Comment', commentSchema)