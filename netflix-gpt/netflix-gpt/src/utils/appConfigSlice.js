import {createSlice} from '@reduxjs/toolkit';
const appConfigSlice = createSlice({
    name:'appConfig',
    initialState:{language:'English'},
    reducers:{
        setLanguageKey:(state,action)=>{
            state.language = action.payload;
        }
    }
})
export const { setLanguageKey } = appConfigSlice.actions;
export default appConfigSlice.reducer;