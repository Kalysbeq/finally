import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Cartblock } from './cartblock/cart-block'
import { Registration } from '../../pages/registraton/Registration'

import './header.css'
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header-title">
          OYNOP-JYRGA
        </Link>
      </div>

      <div className="wrapper header__cart-btn-wrapper">
        <div className="link-header"></div>
        <Link className="register-header" to="/registraton">
          Регистрация
        </Link>
        <Cartblock />
      </div>
    </div>
  )
}
