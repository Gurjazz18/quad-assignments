import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Moviebook } from './Moviebook'

export const Home = () => {
  const navagate = useNavigate()
  const [movieData, setMovieData] = useState([])
  const Getdata = async () => {
    let response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    let data = await response.json();
    console.log(data)
    setMovieData(data)
  }
  useEffect(() => {
    Getdata()
  }, [])

  return (
    <div >
      <h1 className='text-center p-2'>Movies</h1>
      <div className='d-flex flex-wrap  column-gap-3 p-2' style={{ margin: "auto" }}>
        {
          movieData?.filter((el, i) => (i !== 2)).map((movie, i) => (
            <div className="card mb-4" style={{ width: "25rem" }}>
              <img src={movie?.show?.image?.original} className="card-img-top" alt="MovieName" height="420px" />
              <div className="card-body">
                <h5 className="card-title">{movie?.show.name}</h5>
                <p className="card-text">premiered : {movie?.show.premiered}</p>

                <span className='d-flex justify-content-between'>
                  <button className="btn btn-primary"
                    onClick={() => {
                      navagate("/summary");
                      localStorage.setItem("movie", JSON.stringify(movie))
                    }}>view summary</button>
                  <Moviebook movie={movie} />
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
