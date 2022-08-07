import React from 'react'
import './cartItem.css'
export const CartItem = ({
  title, price,
}) => {
  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className='cart-item__price'>
        <span> {price}.сом </span>
      </div>

    </div>

  );
};