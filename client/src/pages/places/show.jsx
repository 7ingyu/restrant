const React = require('react')
const Def = require('../default')

function Stars ({ rating }) {
  const width = rating / 5 * 100

  const starStyles = {
    width: `${width}%`,
    height: '100%',
    overflow: 'hidden'
  }

  return (
    <div className="fs-2 d-flex">
      <div className="position-relative ">
        <div className="">{[1, 2, 3, 4, 5].map((n) => <i key={n} className="bi bi-star" />)}</div>
        <div className="position-absolute top-0 left-0 d-flex" style={starStyles}>
          {[1, 2, 3, 4, 5].map((n) => <i key={n} className="bi bi-star-fill" />)}
        </div>
      </div>
    </div>
  )
}

function Show (
  { id, name, state, city, cuisines, pic, founded, comments }
) {

  const rating = comments.reduce((a, {stars}) => a + stars, 0) / comments.length

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
            <p>{comments.length ? <Stars rating={rating} /> : 'Not Rated'}</p>
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
                    <div><Stars rating={stars} /></div>
                    <div>{rant ? '😡' : '😻'} {content}</div>
                    <div>- {author}</div>
                  </div>
                </div>
              ))
            ) : <p>No comments yet!</p>}
            <div className="mt-3">
              <form className="row" method="POST" action={`/places/${id}/comments`}>

                <div className="col-12 form-group">
                  <label className="form-label" htmlFor="new-comment-author">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="new-comment-author"
                    name="author"
                  />
                </div>

                <div className="col-6">
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="new-comment-rant"
                      name="rant"
                    />
                    <label className="form-check-label" htmlFor="new-comment-rant">Is this a rant?</label>
                  </div>
                </div>

                <div className="col-6">
                  <div className="input-group mt-3">
                    <label className="input-group-text" htmlFor="new-comment-rant">Stars</label>
                    <input
                      type="number"
                      className="form-control"
                      id="new-comment-stars"
                      name="stars"
                      required
                    />
                  </div>
                </div>

                <div className="col-12 form-group">
                  <label className="form-label" htmlFor="new-comment-content">Comment</label>
                  <textarea
                    className="form-control"
                    id="new-comment-content"
                    name="content"
                  />
                </div>

                <div className="col-12 mt-3">
                  <button className="btn btn-secondary">Add Comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = Show