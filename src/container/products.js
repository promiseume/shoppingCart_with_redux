import React,{useState,useEffect }from 'react'
import {fetchAllProducts} from '../ultility'
import AllProduct from './allProduct'

export default function Products() {
    const [data,setData]= useState([]);
    const [ loading, setLoading ] = useState(false)
    const fetchProduct =()=>{
        setLoading(true)
        fetchAllProducts().then((res) => {
            setData(res);
            setLoading(false)
        })
    }
    
    useEffect(()=> {
       fetchProduct();  
        },[])  
   
  return (
    <div>
        {data.map((items) =>  <div key={items.id}>
         <AllProduct id={items.id}
         name={items.title}
         imageUrl={items.image}
         price={items.price}/>
        </div>)}
    </div>
  )
}
