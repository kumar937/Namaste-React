import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpComingMovies,removeNowPlayingMovies } from '../utils/movieSlice';

export const useUpComingMovies = () => {
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming', ApiOptions); 
      const data = await response.json();
      dispatch(addUpComingMovies(data.results));
    }
  useEffect(()=>{
    fetchData();    
  },[])
}