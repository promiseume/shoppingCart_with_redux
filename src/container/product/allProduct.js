import React from 'react'
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/cartAction"
import './product.css'

export default function AllProduct({name,id,imageUrl,price}) {
    const dispatch = useDispatch();
    const addItem =(e)=>{
        e.preventDefault();
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            imageUrl
        }))
    }
  return (
    <section className='cart-item card' style={{width: "19rem", height:'450px'}}>
      <div className='img-container'>
        <img className='cartImg card-img-top' src={imageUrl} alt={name}/>
        </div>
         <div className='des-container'>
        <h1 className='productName'>{name}</h1>
        <p className='productPrice'>${price}</p>
        </div>
        <div className='button-cont'>
        <button className='cart-button' onClick={addItem}>Add to cart</button>
        </div>

    </section>
  )
}
