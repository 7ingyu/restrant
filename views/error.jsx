const React = require('react')
const Def = require('./default')

function Error ({error}) {
  return (
    <Def>
      <main>
        <h1>Error!</h1>
        <p>{error}</p>
      </main>
    </Def>
  )
}

module.exports = Error