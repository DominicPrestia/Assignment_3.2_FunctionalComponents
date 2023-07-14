import React from 'react'
import Movie from './Movie'
import './CSS/Genre.css'

const Genre = ({ gName, description, movieTitle1, movieTitle2 }) => {
  return (
    <>
    <div className='marginFormat'>
    <div className='genreCard'>
      <h2>Genre: {gName}</h2>
      <h3>Description: {description}</h3>

      {/* Passing the movieTitle objects and all properties to the Movie component*/}
      <Movie {...movieTitle1} />
      <Movie {...movieTitle2} />
      <hr />

      </div>
      </div>
    </>
  )
}

export default Genre