import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/header'
import { HomePage } from './home-page/home-page'

export default function Home() {
  return (
    <div className="App">
      <Header />

      <HomePage />
    </div>
  )
}
