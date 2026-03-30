import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpComingMovies,removeNowPlayingMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
export const useUpComingMovies = () => {
  const upComingMovies = useSelector((state) => state.movie.upComingMovies);
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming', ApiOptions);
      //const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', ApiOptions); 
      const data = await response.json();
      dispatch(addUpComingMovies(data.results));
    }
  useEffect(()=>{
    (upComingMovies.length === 0 && fetchData());    
  },[])
}