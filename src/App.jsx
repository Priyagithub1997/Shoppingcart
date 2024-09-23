
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Viewcart from "./Viewcart.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react'




function App() {
  const [cart, setcart] = useState([]);
 



  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />

        <Routes>
          <Route path='/' element={<Home cart={cart} setcart={setcart} 
           />}>  </Route>
          <Route path='/Viewcart' element={<Viewcart cart={cart} setcart={setcart} />}>  </Route>


        </Routes>

      </BrowserRouter>

    </>
  )
}


export default App
