import { createSlice } from "@reduxjs/toolkit";
const userSlcie= createSlice({
    name:'user',
    initialState:{},
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:()=>{
            return null;
        }
    }
})
export const {addUser,removeUser} = userSlcie.actions;
export default userSlcie.reducer;