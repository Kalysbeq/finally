import React from 'react'
import './game-image.css'

export const GameImage = ({ image = '' }) => {
  return (
    <div>
      <div
        className="game-image"
        loi
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}
