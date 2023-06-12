import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	entities: [],
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		newProjectAdded(state, action) {
			state.entities.push(action.payload)
		},
	},
})

const { reducer: projectsReducer, actions } = projectsSlice
const { newProjectAdded } = actions

export const addNewProject = payload => dispatch => {
	dispatch(newProjectAdded(payload))
}

export const getProjectsList = () => state => state.entities

export default projectsReducer
