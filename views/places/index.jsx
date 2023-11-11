const React = require('react')
const Def = require('../default')

function Index ({ places = [] }) {

  const placesFormatted = places.map(({name, pic, cuisines, city, state}, id) => (
    <div className="col-sm-6" key={id}>
      <a href={`/places/${id}`}><h2>{name}</h2></a>
      <p className="text-center">
        {cuisines}
      </p>
      <img className="img-fluid" src={pic} alt={name} />
      <p className="text-center">
        Located in {city}, {state}
      </p>
    </div>
  ))

  return (
    <Def>
      <main>
        <h1>Places</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Def>
  )
}

module.exports = Index