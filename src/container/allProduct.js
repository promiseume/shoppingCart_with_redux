import React from 'react'
import {useDispatch} from "react-redux";
import {cartActions} from "../redux/cartAction"

export default function AllProduct({name,id,imageUrl,price}) {
    const dispatch = useDispatch();
    const addItem =(e)=>{
        e.preventDefault();
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
        }))
    }
  return (
    <div className='cart'>
        <img src={imageUrl} alt={name}/>
        <h1>{name}</h1>
        <p>${price}</p>
        <button onClick={addItem}>Add to cart</button>
    </div>
  )
}
