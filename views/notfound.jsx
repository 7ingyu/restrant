const React = require('react')
const Def = require('./default')

function NotFound () {
  return (
    <Def>
      <main>
        <h1>Oops, sorry, we can't find this page!</h1>
        <img className="img-fluid" src="https://http.dog/404.jpg" alt="404: PAGE NOT FOUND" />
      </main>
    </Def>
  )
}

module.exports = NotFound