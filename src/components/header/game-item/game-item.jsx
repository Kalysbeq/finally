import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ItemsBuy } from '../buttonBuy/Items-buy'
import { GameImage } from '../gameimage/game-image'
import { setCurrentGame } from '../../../redux/game/reducer'
import './game-item.css'

const GameItem = ({ game }) => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log('handleClick')
    dispatch(setCurrentGame(game))
    history(`/ ${game.name}`)
  }
  console.log(game)
  return (

    <div className="game-item" onClick={handleClick}>
      <GameImage image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.name}</span>
        <div className="game-item__ganre">
          {game.genres.map((gengre) => {
            return <span className="gengre">{gengre.title}</span>
          })}
        </div>
        <div className="game-items__buy">
          <ItemsBuy game={game} />
        </div>
      </div>
    </div>
  )
}
export default GameItem;