import { useEffect, useState } from 'react'
function Index () {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const getPlaces = async () => {
      const res = await fetch('/api/places')
      const data = await res.json()
      setPlaces(data)
    }
    getPlaces()
    // fetch('/places')
    //   .then(res => res.json())
    //   .then(data => setPlaces(data))
  }, [])

  const placesFormatted = places.map(({name, pic, cuisines, city, state, id}) => (
    <div className="col-12 col-lg-6 text-center" key={id}>
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
    <>
        <h1>Places</h1>
        <div className="row">
          {placesFormatted}
        </div>
        </>
  )
}

// module.exports = Index
export default Index