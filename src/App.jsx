
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Viewcart from "./Viewcart.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'




function App() {
  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState([]);
  
  const [filteredproducts, setfilteredproducts] = useState([]);




  const fetchitems = async () => {

    const response = await fetch("http://localhost:3500/data");
    const products = await response.json();
    console.log(products);
    setproducts(products);
    setfilteredproducts(products);


  }


  useEffect(() => {
    fetchitems();
  }, []);





  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />

        <Routes>
          <Route path='/' element={<Home cart={cart} setcart={setcart} products={products} 
            filteredproducts={filteredproducts} setfilteredproducts={setfilteredproducts}/>}>  </Route>
          <Route path='/Viewcart' element={<Viewcart cart={cart} setcart={setcart} />}>  </Route>


        </Routes>

      </BrowserRouter>

    </>
  )
}


export default App
