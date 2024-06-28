import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './slices/language';
import loaderSlice from './slices/loader';

const store = configureStore({
    reducer: {
        lang: languageSlice,
        loader :loaderSlice,
    }
});

export default store;