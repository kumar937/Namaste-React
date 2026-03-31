import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:'movie',
    initialState:{ 
        nowPlayingMovies: [] ,
        popularMovies: [],
        topRatedMovies: [],
        upComingMovies: [],
        movieTrailer: {},
        selectedMovie: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        },
        removeNowPlayingMovies:()=>{
            return { nowPlayingMovies: [] };
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        setSelectedMovie:(state,action)=>{
            state.selectedMovie = action.payload;
        }

    }
})
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies,removeNowPlayingMovies,addMovieTrailer,setSelectedMovie} = movieSlice.actions;
export default movieSlice.reducer;