import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './slices/language';
import loaderSlice from './slices/loader';
import moviesReducer from './slices/movie';
import modeReducer from './slices/mode';

const store = configureStore({
    reducer: {
        lang: languageSlice,
        loader :loaderSlice,
        movies :moviesReducer,
        mode :modeReducer,
    }
});

export default store;