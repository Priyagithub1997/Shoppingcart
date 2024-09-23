import React from 'react'
import { useState } from 'react';
import Product from './Product';




const Home = ({ cart, setcart,products, filteredproducts ,setfilteredproducts}) => {
  

  const [search, setsearch] = useState("");


const handlesearch=(e)=>{
  setsearch(e.target.value);
  setfilteredproducts(products.filter((product)=>(product.name.toLowerCase().includes(search.toLowerCase()))))
  

}
  return (
    <>
      <h1>Collections</h1>
      <input  className="search" placeholder="Search" type='search' value={search} onChange={handlesearch}></input>
      <div className='productcontainer'>
        {filteredproducts
        .map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setcart={setcart}
           
             />

        ))}

      </div>


    </>

  )
}

export default Home