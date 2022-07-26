import React from 'react'
import { Link } from 'react-router-dom'
import { Cartblock } from './cartblock/cart-block'
import "./header.css"

export const Header=() => {
  return (
   <div className='header'>
    <div className='wrapper'>
      <Link to='/' className='header__store-title '>
        KGZ-STORE
      </Link>
  
    </div>
    <div className='wrapper header__cart-btn-wrapper'>
     <Cartblock/>
    </div>
   </div>
  )
}
