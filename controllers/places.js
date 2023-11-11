const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', async (req, res) => {
  res.render('places/index', { places })
})

// POST /places
router.post('/', async (req, res) => {
  // console.log(req.body)
  places.push(req.body)
  res.redirect('/places')
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id/edit
router.get('/:id/edit', async (req, res) => {
  const id = req.params.id
  res.render('places/edit')
})

// GET /places/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  if (!places[id]) {
    res.render('notfound')
  } else {
    res.render('places/show', { ...places[id], id })
  }
})

// DELETE /places/:id
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  if (!places[id]) {
    res.render('notfound')
  } else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router