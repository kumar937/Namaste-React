import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptSearchReducer from './GptSearchSlice';
import appConfigReducer from './appConfigSlice';
export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gptSearch: gptSearchReducer,
        appConfig: appConfigReducer,
    },
});