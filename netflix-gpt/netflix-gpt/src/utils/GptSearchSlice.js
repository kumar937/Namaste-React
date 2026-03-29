import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{toggleGptSearch: false},
    reducers:{
        toggleGptSearch:(state)=>{
            state.toggleGptSearch = !state.toggleGptSearch;
        }
    }
})
export default gptSearchSlice.reducer;
export const {toggleGptSearch} = gptSearchSlice.actions;