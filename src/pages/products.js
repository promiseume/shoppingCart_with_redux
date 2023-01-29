import React,{useState, useEffect }from 'react'
import {fetchAllProducts} from '../ultility'
import AllProduct from '../container/product/allProduct'
import '../container/product/product.css';
import {useSelector,useDispatch} from "react-redux";
import {cartActions} from "../redux/cartAction"


export default function Products() {
    const [data,setData]= useState([]);
     const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false)
    const fetchProduct =()=>{
        setLoading(true)
        fetchAllProducts().then((res) => {
            setData(res);
            setLoading(false)
            dispatch(cartActions.setItems(res))
        })
    }
    useEffect(()=> {
       fetchProduct();  
        },[])  
   
  return (
    <div className='card-container'>
        {data.map((items) =>  <div key={items.id}>
         <AllProduct id={items.id}
         name={items.title}
         imageUrl={items.image}
         price={items.price}/>
        </div>)}
    </div>
    
  )
}
