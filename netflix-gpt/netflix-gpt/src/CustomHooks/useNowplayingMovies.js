import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies,removeNowPlayingMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
export const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', ApiOptions); 
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    }
  useEffect(()=>{
    (nowPlayingMovies.length === 0 && fetchData());    
  },[])
}