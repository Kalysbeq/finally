import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ItemsBuy } from '../../components/header/buttonBuy/Items-buy'
import { Cartblock } from '../../components/header/cartblock/cart-block'
import { GameImage } from '../../components/header/gameimage/game-image'
import './game-page.css'
export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame)
  if (!game) return null
  return (
    <div className="game-page">
      <header className="header-game__page">
        <Link className='game-page__link' to="/">OYNOP-JYRGA</Link>
        <h1 className="game-page__title">{game.title}</h1>
        <Cartblock />
      </header>

      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameImage image={game.image} />
          <p className="game-description">{game.description}</p>

          <div className="game-page__buy-game">
            <ItemsBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}
