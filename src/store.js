// store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSclice'; // Ensure correct path

 const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Include other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store