import React from 'react'
import "./game-image.css"

export const GameImage=({image =''})=> {
  return (
   <div className='game-image' style={{backgroundImage:`url(${image})`}}/>
  )
}
