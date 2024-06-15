// const React = require('react')

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/places">Places</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/places/new">Add a Place</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// module.exports = Nav
export default Nav