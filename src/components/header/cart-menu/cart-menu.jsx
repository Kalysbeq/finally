import React from 'react'
import { Button } from '../button/Button'
import { ItemsBuy } from '../buttonBuy/Items-buy'
import { CartItem } from '../cartItem/cart-item'
import { calcTotalPrice } from '../util'
import './cart-menu.css'
export const CartMenu = ({ items, onClick }) => {
  const e = () => {
    alert('Красава!')
  }
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0
          ? items.map((game) => (
            <CartItem
              key={game.image}
              id={game.id}
              price={game.price}
              title={game.name}
            />
          ))
          : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}сом</span>
          </div>

          <Button type="primary" size="m" onClick={e}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  )
}
