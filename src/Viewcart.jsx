import React, { useEffect, useState } from 'react'

const Viewcart = ({ cart, setcart }) => {
  const [total, settotal] = useState(0);


  const removefromcart = (product) => {
    
    setcart(cart.filter((c) => (c.id !== product.id)));
  }

  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + parseInt(curr.rate), 0))

  }, [cart]);







  return (
    <>

      <div className='viewcartcontainer'>
        {cart.map((product) => (
          <div key={product.id} className='viewcart'>
            <div className='Viewcartimage'>
              <img src={product.image} alt='' height="150px" width="150px"></img>
            </div>
            <div className='viewcartdetails'>
              <p>{product.name}</p>
              <p>{product.rate}</p>

              <button onClick={()=>removefromcart(product)} className='remove'>Remove from Cart</button>


            </div>
          

          </div>


        ))}
        <hr></hr>
        <p>Total Amount is = {total}</p>

        <hr></hr>
      </div>
    </>
  )
}

export default Viewcart