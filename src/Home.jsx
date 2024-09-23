import React from 'react'
import { useState } from 'react';
import Product from './Product';
import productdata from "../src/DB.json";





const Home = ({ cart, setcart }) => {


  const [search, setsearch] = useState("");

  const [products] = useState(productdata);







  return (
    <>
      <h1>Collections</h1>
      <input className="search" placeholder="Search" type='search' value={search} onChange={(e) => setsearch(e.target.value)}></input>
      <div className='productcontainer'>
        {products.filter((product) => (product.name.toLowerCase().includes(search.toLowerCase())))
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