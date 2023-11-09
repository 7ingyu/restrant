const React = require('react')
const Def = require('../default')

function New () {

  const states = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]

  return (
    <Def>
      <main>
        <h1>Add a Place</h1>
        <form className="row" method="POST" action="/places">

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
              defaultValue=""
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
              htmlFor="new-place-cuisine"
            >
              Cuisine
            </label>
            <input
              className="form-control"
              type="text"
              id="new-place-cuisine"
              name="cuisine"
              required
            />
          </div>

          <div className="col-12">

            <button className="btn btn-secondary">Add Place!</button>
          </div>

        </form>
      </main>
    </Def>
  )
}

module.exports = New