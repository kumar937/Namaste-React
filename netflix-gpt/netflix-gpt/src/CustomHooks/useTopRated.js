import { useState, useEffect } from 'react';
import { ApiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTopRatedMovies ,removeNowPlayingMovies } from '../utils/movieSlice';

export const useTopRatedMovies = () => {
      const dispatch = useDispatch();
      const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', ApiOptions); 
      const data = await response.json();
      console.log("Fetched data: ", data);
      dispatch(addTopRatedMovies(data.results));
    }
  useEffect(()=>{
    fetchData();    
  },[])
}