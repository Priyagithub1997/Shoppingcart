import React from 'react'
import data from "../assets/Foodproducts.json"
import Product from './Product';
import { useState } from 'react';



const Home = ({cart,setcart}) => {
  const [products]=useState(data);

   
  return (
    <>
   <h1>Food Varieties</h1>
    <div className='productcontainer'>
  {products.map((product)=>(
    <Product key={product.id} product={product} 
      cart={cart} setcart={setcart}/>
      
  ))}
 
</div>

 
 </>
      
  )
}

export default Home