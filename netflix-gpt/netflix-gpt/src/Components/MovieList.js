import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div>
    <h1 className='text-3xl text-white px-6 py-2'>{title}</h1>
    <div className='overflow-x-auto flex gap-4 px-6 py-4'>
    {movies?.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
    </div>
    </div>
  )
}

export default MovieList