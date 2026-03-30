import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{toggleGptSearch: false,
        GptSearchResults:{names:[], movies:[]}
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.toggleGptSearch = !state.toggleGptSearch;
        },
        setGptSearchResults:(state,action)=>{
            if(action?.payload?.names){
            state.GptSearchResults.names = action.payload.names;}
            if(action?.payload?.movies) {
                state.GptSearchResults.movies = action.payload.movies;
            }
        }
    }
})
export default gptSearchSlice.reducer;
export const {toggleGptSearch,setGptSearchResults} = gptSearchSlice.actions;