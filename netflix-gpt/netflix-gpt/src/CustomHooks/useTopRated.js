import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTopRatedMovies ,removeNowPlayingMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
export const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', ApiOptions); 
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    }
  useEffect(()=>{
    (topRatedMovies.length === 0 && fetchData());    
  },[])
}