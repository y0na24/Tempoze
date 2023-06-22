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

export const getCategoryList = () => state => state.entities.categories

export const getTimeSum = () => state => {
	return state.entities.reduce((acc, elem) => acc + Number(elem.time), 0)
}

export const getProjectsAmount = () => state => state.entities.length

export const getLongestSession = () => state => {
	let longestSession = 0
	const projects = state.entities

	projects.forEach(project => {
		if (project.time > longestSession) {
			longestSession = project.time
		}
	})

	return longestSession
}

export default projectsReducer
