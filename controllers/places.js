const router = require('express').Router()

// GET /places
router.get('/', async (req, res) => {
  const places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]

  res.render('places/index', { places })
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
  res.render('places/show')
})

module.exports = router