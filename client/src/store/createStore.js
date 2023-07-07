import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './projectsSlice'

const createStore = () => configureStore({
  reducer: projectsReducer,
})

export default createStore
