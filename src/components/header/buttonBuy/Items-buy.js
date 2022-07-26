import React from 'react'
import './items.css'
import { Button } from '../button/Button'

export const ItemsBuy=({game})=> {
  return (
      <div className='game-buy'>
      <span className='game-price'>{game.price} Coм</span>
     <Button 
       type='primary'
       onClick={()=> null}
        
       >
      в корзину
     </Button>
     
      </div>
  )

}
