import { configureStore } from '@reduxjs/toolkit'
import UserSlice from 'src/redux/slices/UserSlice'

export const Store = configureStore({
  reducer: {
    UserSlice,
  },
})