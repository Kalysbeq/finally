import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './card/reducer'
import gamesReducer from './game/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer,
  },
})
