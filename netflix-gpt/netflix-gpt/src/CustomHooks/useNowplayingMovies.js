import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies,removeNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', ApiOptions); 
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    }
  useEffect(()=>{
    fetchData();    
  },[])
}