import {configureStore} from '@reduxjs/toolkit';
import cart from './cartAction';

const store = configureStore({
  reducer:{
    cart: cart.reducer
  }
})
export default store