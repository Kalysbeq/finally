import React from 'react'
import { useDispatch } from 'react-redux'
import './items.css'
import { Button } from '../button/Button'
import { setItemInCart } from '../../../redux/card/reducer'

export const ItemsBuy=( {game} )=> {
const dispatch = useDispatch()
  const handleClick = (e)=>{
      e.stopPropagation();
      dispatch(setItemInCart(game))
  }
  return (
      <div className='game-buy'>
      <span className='game-price'>{game.price} Coм</span>
     <Button 
       type='primary'
       onClick={handleClick}
        
       >
      в корзину
     </Button>
     
      </div>
  )

}
