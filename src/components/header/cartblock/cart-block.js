import React from 'react'
import "./cart-block.css"
import{BsMinecart} from "react-icons/bs"
import { useSelector } from 'react-redux'

export const  Cartblock = () => {
  const items = useSelector(state=>state.cart.itemsInCart);
  const total = items.reduce((acc,game) => acc += game.price,0)

  return (
    <div className='cart-block'>
      <BsMinecart className='cart-block__icon' size ={25} />
      <span className='cart-block__total-price'>{total} сом</span>
    </div>
  )
}
