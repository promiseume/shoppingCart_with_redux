import React from 'react'
import {useDispatch} from 'react-redux'
import {cartActions} from "../../redux/cartAction"
import './pickedItem.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';

export default function Items({name,price,total,quantity,id,imageUrl}) {
  const dispatch = useDispatch();
  const addItem =()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      imageUrl
    }))
  }
  const removeItem =()=>{
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <section className='item-container'>
      <div className='cart-thumb'>
      <div className='item-image'>
        <img src={imageUrl} alt={name}/>
      </div>
      <div className='item-desc'>
        <h1>{name}</h1>
        <p>Price:{price}</p>
        <div className='item-btn-qty'>
        <p style={{paddingTop:'10px'}}>Quantity: {quantity}</p>
        <button className='item-button' onClick={removeItem}><AiOutlineMinus style={{fontSize:'25px'}}/></button>
        <button className='item-button' onClick={addItem}><AiOutlinePlus style={{fontSize:'25px'}}/></button>
        </div>
        </div>
        </div>
        <div className='item-price'>
        <p>{total}</p>
        </div>
    </section>
  )
}
