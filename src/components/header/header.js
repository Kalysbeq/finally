import React from 'react'

import { Cartblock } from './cartblock/cart-block'
import "./header.css"

export const Header=() => {
  return (
   <div className='header'>
    <div className='wrapper'>
        <a>
          OYNOP-JYRGA
        </a>
  
    </div>
    <div className='wrapper header__cart-btn-wrapper'>
     <Cartblock/>
    </div>
   </div>
  )
}
