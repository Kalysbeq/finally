import React from 'react'
import "./cart-block.css"
import{BsMinecart} from "react-icons/bs"

export const  Cartblock = () => {
  return (
    <div className='cart-block'>
      <BsMinecart className='cart-block__icon' size ={25} />
      <span className='cart-block__total-price'>1000 сом</span>
    </div>
  )
}
