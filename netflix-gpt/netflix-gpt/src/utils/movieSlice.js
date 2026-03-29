import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:'movie',
    initialState:{ 
        nowPlayingMovies: [] ,
        movieTrailer: {},
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        removeNowPlayingMovies:()=>{
            return { nowPlayingMovies: [] };
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        }
    }
})
export const {addNowPlayingMovies,removeNowPlayingMovies,addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;