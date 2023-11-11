const React = require('react')
const Def = require('../default')
const states = require('../data/states.json')

function Edit (
  { id, name, state, city, cuisines, pic }
) {

  return (
    <Def>
      <main>
        <h1>Edit</h1>
        <form method="POST" action={`/places/${id}?_method=PUT`}>

        <div className="col-12 mb-3 form-group">
            <label
              className="form-label"
              htmlFor="new-place-name"
            >
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="new-place-name"
              name="name"
              defaultValue={name}
              required
            />
          </div>

          <div className="col-12 mb-3 form-group">
            <label
              className="form-label"
              htmlFor="new-place-pic"
            >
              Image URL
            </label>
            <input
              className="form-control"
              type="url"
              id="new-place-pic"
              name="pic"
              defaultValue={pic}
              required
            />
          </div>

          <div className="col-12 mb-3 form-group">
            <label
              className="form-label"
              htmlFor="new-place-city"
            >
              City
            </label>
            <input
              className="form-control"
              type="text"
              id="new-place-city"
              name="city"
              defaultValue={city}
              required
            />
          </div>

          <div className="col-12 mb-3 form-group">
            <label
              className="form-label"
              htmlFor="new-place-state"
            >
              State
            </label>
            <select
              className="form-select"
              id="new-place-state"
              name="state"
              defaultValue={state}
              required
            >
              <option value="" disabled></option>
              {states.map(({name, abbreviation}, i) => (
                <option key={i} value={abbreviation}>{name}</option>
              ))}
            </select>
          </div>

          <div className="col-12 mb-3 form-group">
            <label
              className="form-label"
              htmlFor="new-place-cuisines"
            >
              Cuisine
            </label>
            <input
              className="form-control"
              type="text"
              id="new-place-cuisines"
              name="cuisines"
              defaultValue={cuisines}
              required
            />
          </div>

          <div className="col-12">

            <button className="btn btn-secondary">Save</button>
          </div>

        </form>
      </main>
    </Def>
  )
}

module.exports = Edit