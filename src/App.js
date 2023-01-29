import React from 'react';
import {useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
// import Header from './container/header/header';
import Products from './pages/products';
import Nav from './container/Nav/nav';
import CartItems from './pages/cartItems'
function App() {
  const cartItems = useSelector((state) => state.cart.items);
  
  return (<>
  <Nav/>
  <div className="container">
          {/* <Header/> */}
          <Routes>
          <Route path={'/'} element={<Products/>}/>
          <Route path={'/cart'} element={<CartItems/>}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
