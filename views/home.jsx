const React = require('react')
const Def = require('./default')

function Home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant'</h1>
        <div>
          <img className="img-fluid" src="/images/home.avif" alt="Chia Fruit Shake" />
          <div>
            Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk">Unsplash</a>.
          </div>
        </div>
        <a href="/places">
          <button className="btn btn-secondary">Places</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = Home