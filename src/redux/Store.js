import { configureStore } from '@reduxjs/toolkit'
import userSlices from './UserSlicers'

export const store = configureStore({
  reducer: {
    user:userSlices

  },
})