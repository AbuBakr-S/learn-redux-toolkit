import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { dogsApiSlice } from '../features/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    // add the thunk reducer to our store
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  // add the custom generated middleware for the dogsApiSlice to the store
  middleware: (getDefaultMiddleware) => {
    // combined middleware allows us to track cache lifetimes
    // - if no other part of the codebase needs this data, we can remove it from the cache after it expires
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;