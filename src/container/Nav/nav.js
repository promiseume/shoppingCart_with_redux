import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './nav.css'
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
export default function Nav() {
    const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <div className='nav-container sticky-top'>
        <Link to='/'><h1>Sauce</h1></Link>
        <Link to='/cart'>
        <div className='cart-icons'>
         <AiOutlineShoppingCart className='icon'/>
         {localStorage.getItem('quantity') ? <span className='cart-number'>{localStorage.getItem('quantity')}</span>:
         <span className='cart-number'>{quantity}</span>
        }
        </div>
        </Link>
    </div>
  )
}
