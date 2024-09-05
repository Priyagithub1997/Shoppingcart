import React from 'react'

const Product = ({ product, cart, setcart }) => {

  const addtocart = () => {
    setcart([...cart, product]);


  }

  const removefromcart=()=>{
    setcart(cart.filter((c)=>(c.id !== product.id)));

  }





  return (
    <>

      <div className='product'>
        <img src={product.image} height="200px" width="200px"></img>
        <p>{product.name}</p>
        <p>{product.rate}</p>
        
        {cart.includes(product)
          ? <button onClick={removefromcart} className='remove'>Remove from Cart</button>
          : <button onClick={addtocart} className='add'>Add to cart</button>
        }
      </div>
    </>

  )
}

export default Product