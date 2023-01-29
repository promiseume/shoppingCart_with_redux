import React from 'react';
import {Routes, Route} from "react-router-dom";
import Products from './pages/products';
import Nav from './container/Nav/nav';
import Footer from './container/footer/footer';
import CartItems from './pages/cartItems';
function App() {
  return (<>
  <Nav/>
          <Routes>
          <Route path={'/'} element={<Products/>}/>
          <Route path={'/cart'} element={<CartItems/>}/>
          </Routes>
          <Footer/>
    </>
  );
}

export default App;
