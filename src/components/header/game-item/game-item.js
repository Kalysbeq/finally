import React from 'react'
import { ItemsBuy } from '../buttonBuy/Items-buy'
import { GameImage } from '../gameimage/game-image'
import './game-item.css'




export  const GameItem =({game})=> {
  return (
    <div className='game-item'>
      <GameImage image={game.image}/>
      <div className='game-item__details'>
      <span className='game-item__title'>{game.title}</span>
      <div className='game-item__ganre'>
        {
          game.genres.map(gengre => {
            return <span className='gengre'>{gengre}</span>
          })
        }
      </div>
      <div className='game-items__buy'>
        <ItemsBuy game={game}/>
      </div>
     </div>
      </div>
  )
}
