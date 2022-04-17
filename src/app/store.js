import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/Product/productsSlice';
import basketReducer from '../features/basket/basketSlice';

export const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    counter: counterReducer,
    allBaskets: basketReducer
  }, 
  devTools: true
});
