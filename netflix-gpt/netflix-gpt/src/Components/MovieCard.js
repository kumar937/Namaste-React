import React from 'react'
import { baseImageUrl } from '../utils/constants';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../utils/movieSlice';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setMovie = () => {
    dispatch(setSelectedMovie(movie));
    navigate('/play');
  }
  return (
    movie.poster_path ? (
      <img className='w-3/12 md:w-44' src={baseImageUrl + movie.poster_path} alt={movie.title} onClick={setMovie}/>
    ) : null
  )
}

export default MovieCard