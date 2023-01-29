import React from "react";
import {useSelector} from "react-redux";

const Header = () => {
  let total = 0;
  const cartList = useSelector ((state) => state.cart.items);
  cartList.forEach((item)=>{
    total += item.total
  })
  return (
    <div>
      <h3>${total}</h3>
    </div>
  );
};

export default Header;
