import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Product/productsSlice';
import basketReducer from '../features/basket/basketSlice';
import accountDetailsReducer from '../features/accountDetails/accountDetailsSlice';

export const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    allBaskets: basketReducer,
    allAccounts: accountDetailsReducer
  }, 
  devTools: true
});
