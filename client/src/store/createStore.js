import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './projectsSlice'
import usersReducer from './userSlice'

const createStore = () =>
	configureStore({
		reducer: {
			projects: projectsReducer,
			users: usersReducer,
		},
	})

export default createStore
