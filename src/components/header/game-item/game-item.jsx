import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ItemsBuy } from '../buttonBuy/Items-buy'
import { GameImage } from '../gameimage/game-image'
import { setCurrentGame } from '../../../redux/game/reducer'
import './game-item.css'

export const GameItem = ({ game }) => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log('handleClick')
    dispatch(setCurrentGame(game))
    history(`/ ${game.title}`)
  }
  return (
    <div className="game-item" onClick={handleClick}>
      <GameImage
        title={game.title}
        description={game.description}
        video={game.video}
        image={game.image}
      />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__ganre">
          {game.genres.map((gengre) => {
            return <span className="gengre">{gengre}</span>
          })}
        </div>
        <div className="game-items__buy">
          <ItemsBuy game={game} />
        </div>
      </div>
    </div>
  )
}
