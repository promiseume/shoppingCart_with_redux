import React from 'react';
import {useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
import Header from './container/header';
import Products from './container/products';
import Cart from './container/cart';
import CartItems from './container/cartItems'
function App() {
  const cartItems = useSelector((state) => state.cart.items);
  
  return (
  
        <div className="container">
          <Header/>
          <Cart/>
          <Products/>
          <div style={{backgroundColor:'green'}}>
          <CartItems/>
          </div>
        </div>
    
  );
}

export default App;
