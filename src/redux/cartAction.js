import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name:'cart',
    initialState:{
        product:[],
        items:[],
        totalQuantity:0,
       },
       reducers:{
        setItems(state,action){
            state.product = [action.payload];
        },
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    imageUrl:newItem.imageUrl,
                    quantity:1,
                    total:newItem.price
                
                })
                state.totalQuantity++;  
            }
                else{
                    existingItem.quantity++;
                    existingItem.total += newItem.price 
                }
                localStorage.setItem("cartItem",JSON.stringify(state.items));
                 localStorage.setItem("quantity",JSON.stringify(state.totalQuantity))
        },
        removeFromCart(state,action){

           const id = action.payload;

           const existingItems = state.items.find(item => item.id === id);
           if(existingItems.quantity === 1){
            state.items = state.items.filter(item => item.id !== id)
            state.totalQuantity--;
           }
           else{
            existingItems.quantity--;
            existingItems.total -= existingItems.price;
           }
        }
       }
})
export const cartActions = cart.actions;
export default cart;