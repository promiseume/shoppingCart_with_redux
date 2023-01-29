import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './nav.css'
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
export default function Nav() {
    const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <div className='nav-container'>
        <h1>Sauce</h1>
        <Link to='/cart'>
        <div className='cart-icons'>
         <AiOutlineShoppingCart className='icon'/>
         <span className='cart-number'>{quantity}</span>
        </div>
        </Link>
    </div>
  )
}
