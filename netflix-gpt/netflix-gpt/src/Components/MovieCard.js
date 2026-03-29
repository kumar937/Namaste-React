import React from 'react'
import { baseImageUrl } from '../utils/constants';

const MovieCard = ({movie}) => {
    console.log(movie);
  return (
    <img className='w-44' src={baseImageUrl + movie.poster_path} alt={movie.title} />
  )
}

export default MovieCard