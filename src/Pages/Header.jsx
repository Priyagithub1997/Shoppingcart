import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({cart}) => {
  return (
    <nav className='navbar'>
    <div className='navlogo'>
      <p>Food Cart</p>

    </div>
    <div className='navlist'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <span>{cart.length}</span>
        <li><Link to="/Viewcart">Viewcart</Link></li>
      </ul>

    </div>
  </nav>
  )
}

export default Header