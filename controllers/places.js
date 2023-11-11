const router = require('express').Router()
// const places = require('../models/places')
const { Place } = require('../models')

// GET /places
router.get('/', async (req, res) => {
  const places = await Place.find()
  res.render('places/index', { places })
})

// POST /places
router.post('/', async (req, res) => {
  try {
    Object.entries(req.body).forEach(([key, val]) => {
      if (!val) delete req.body[key]
    })
    await Place.create(req.body)
    res.redirect('/places')
  } catch (e) {
    console.log(e)
    res.render('error', { error: e.message })
  }
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id/edit
router.get('/:id/edit', async (req, res) => {
  // const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   res.render('places/edit', { ...places[id], id })
  // }
})

// GET /places/:id
router.get('/:id', async (req, res) => {
  // const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   res.render('places/show', { ...places[id], id })
  // }
})

router.put('/:id', async (req, res) => {
  // const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   places[id] = req.body
  //   res.redirect(`/places/${id}`)
  // }
})

// DELETE /places/:id
router.delete('/:id', async (req, res) => {
  // const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   places.splice(id, 1)
  //   res.redirect('/places')
  // }
})


module.exports = router