import React from 'react'
import { baseImageUrl } from '../utils/constants';

const MovieCard = ({movie}) => {
  return (
    movie.poster_path ? (
      <img className='w-3/12 md:w-44' src={baseImageUrl + movie.poster_path} alt={movie.title} />
    ) : null
  )
}

export default MovieCard