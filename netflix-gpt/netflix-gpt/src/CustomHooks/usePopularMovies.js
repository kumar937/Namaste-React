import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies,removeNowPlayingMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
export const usePopularMovies = () => {
      const popularMovies = useSelector((state) => state.movie.popularMovies);
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular', ApiOptions); 
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    }
  useEffect(()=>{
    (popularMovies.length === 0 && fetchData());    
  },[])
}