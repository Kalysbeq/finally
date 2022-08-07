import React, { useState } from 'react'
import "./cart-block.css"
import { BsMinecart } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { CartMenu } from '../cart-menu/cart-menu'
import { calcTotalPrice } from '../util'
import { ItemsInCart } from '../itemsInCart/itemsInCart'

export const Cartblock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const total = calcTotalPrice(items)

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <BsMinecart className='cart-block__icon' size={25} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      {total > 0 ? <span className='cart-block__total-price'>{total} сом</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  )
}
