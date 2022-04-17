import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/Product/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
  }, 
  devTools: true
});
