import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './items.css'
import { Button } from '../button/Button'
import { setItemInCart, deleteItemFromCart } from '../../../redux/card/reducer'

export const ItemsBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }


  }
  return (
    <div className='game-buy'>
      <span className='game-price'>{game.price} Coм</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать из корзины' : 'в Корзину'}
      </Button>

    </div>
  )

}
