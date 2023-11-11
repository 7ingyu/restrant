const React = require('react')
const Def = require('../default')

function Show (
  { id, name, state, city, cuisines, pic, founded, comments }
) {

  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={pic} alt={name}/>
          </div>
          <div className="col-12 col-lg-6">
            <h1>{name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Located in {city}, {state} serving {cuisines} since {founded}.</p>
            <div className="d-flex gap-2">
              <a href={`/places/${id}/edit`} className="d-block btn btn-secondary">Edit</a>
              <form action={`/places/${id}?_method=DELETE`} method="POST">
                <button className="d-block w-100 btn btn-danger">DELETE</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h2>Comments</h2>
            {comments.length ? (
              comments.map(({id, author, rant, stars, content}) => (
                <div key={id} className="card">
                  <div className="card-body">
                    <div>{stars}</div>
                    <div>{rant ? '😡' : '😻'} {content}</div>
                    <div>- {author}</div>
                  </div>
                </div>
              ))
            ) : <p>No comments yet!</p>}
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = Show