import React from 'react'
import data from "../assets/Foodproducts.json"
import Product from './Product';
import { useState } from 'react';



const Home = ({ cart, setcart}) => {
  const [products] = useState(data);
  const [search, setsearch] = useState("");


  return (
    <>
      <h1>Food Varieties</h1>
      <input  className="search" placeholder="Search" type='search' value={search} onChange={(e) => setsearch(e.target.value)}></input>
      <div className='productcontainer'>
        {products.filter((product)=>(product.name.toLowerCase().includes(search.toLowerCase())))
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