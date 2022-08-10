import React from 'react'
import './Activation.css'
import { Link } from 'react-router-dom'

export const Activation = () => {
  return (
    <>
      <header className='header-activation'>
        <div className='header-container'>
          <Link to='/' className='header-title'>
            OYNOP-JYRGA
          </Link>

          <div className='main-activation'>
            <span >Для того чтобы активировать игру нужно пройти следующие шаги:
            </span>
          </div>
        </div>

      </header>

    </>
  )
}
