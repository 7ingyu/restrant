const React = require('react')
const Def = require('../default')

function Index ({ places = [] }) {

  const placesFormatted = places.map(({name, pic}, i) => (
    <div key={i}>
      <h2>{name}</h2>
      <img src={pic} alt={name} />
    </div>
  ))

  return (
    <Def>
      <main>
        <h1>Places</h1>
        {placesFormatted}
      </main>
    </Def>
  )
}

module.exports = Index