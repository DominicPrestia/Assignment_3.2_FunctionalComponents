import React from 'react'
import './CSS/Movie.css'



// Movie component is receiving the movieTitle object which contains the two props
const Movie = ({title, year}) => {
  return (
    <>
    <h3 className='movieTitle'>Moive Title: <br /><span>{title}</span></h3>
    <h4>Release Year: {year}</h4>
    </>
  )
}

export default Movie