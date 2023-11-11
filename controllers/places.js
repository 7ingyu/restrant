const router = require('express').Router()
// const places = require('../models/places')
const { Place, Comment } = require('../models')

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
    let msg = e.message
    if (e.errors) {
      msg = e.name + ': '
      msg += Object.entries(e.errors)
        .map(([field , {value, message}]) => message)
        .join('. ')
    }
    res.render('places/form', { ...req.body, error: msg, isNew: true })
  }
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/form', { isNew: true })
})

// GET /places/:id/edit
router.get('/:id/edit', async (req, res) => {
  const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   res.render('places/edit', { ...places[id], id })
  // }
  try {
    const place = await Place.findById(id)
    if (place.id) {
      res.render('places/form', place)
    } else {
      throw 'Invalid ID'
    }
  } catch (e) {
    console.log(e)
    res.render('places/index', { error: e.message })
  }
})

router.post('/:id/comments', async (req, res) => {
  const id = req.params.id
  const data = {...req.body}
  Object.entries(data).forEach(([key, val]) => {
    if (!val) delete data[key]
  })
  data.rant = data.rant === 'on'
  try {
    const [place, comment] = await Promise.all([
      Place.findById(id),
      Comment.create(data)
    ])
    place.comments.push(comment.id)
    await place.save();
    res.redirect(`/places/${id}`)
  } catch (e) {
    console.log(e)
    let msg = e.message
    if (e.errors) {
      msg = e.name + ': '
      msg += Object.entries(e.errors)
        .map(([field , {value, message}]) => message)
        .join('. ')
    }
    res.render('error', { error: msg })
  }
})

// GET /places/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   res.render('places/show', { ...places[id], id })
  // }
  try {
    const place = await Place.findById(id)
    await place.populate('comments')
    if (place.id) {
      res.render('places/show', place)
    } else {
      throw 'Invalid ID'
    }
  } catch (e) {
    console.log(e)
    let msg = e.message
    res.render('error', { error: msg })
  }
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  // if (!places[id]) {
  //   res.render('notfound')
  // } else {
  //   places[id] = req.body
  //   res.redirect(`/places/${id}`)
  // }
  try {
    const place = await Place.findById(id)
    const data = {...req.body}
    Object.entries(data).forEach(([key, val]) => {
      if (!val) delete data[key]
    })
    if (place.id) {
      await place.updateOne(data)
      res.redirect(`/places/${id}`)
    } else {
      throw 'Invalid ID'
    }
  } catch (e) {
    console.log(e)
    let msg = e.message
    if (e.errors) {
      msg = e.name + ': '
      msg += Object.entries(e.errors)
        .map(([field , {value, message}]) => message)
        .join('. ')
    }
    res.render('places/form', { ...req.body, error: msg })
  }
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