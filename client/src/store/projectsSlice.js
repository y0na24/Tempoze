import { createAction, createSlice } from '@reduxjs/toolkit'

import projectsService from '../services/project.service'

const projectsSlice = createSlice({
	name: 'projects',
	initialState: {
		entities: [],
		isLoading: true,
		error: null,
	},
	reducers: {
		projectsRequested(state) {
			state.isLoading = true
		},
		projectsReceived(state, action) {
			if (action.payload) {
				state.entities = action.payload
			}
			state.isLoading = false
		},
		projectsRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		projectCreated(state, action) {
			state.entities.push(action.payload)
		},
		projectRemoved(state, action) {
			state.entities = state.entities.filter(
				project => project.projectId !== action.payload
			)
		},
	},
})

const { reducer: projectsReducer, actions } = projectsSlice
const {
	projectsReceived,
	projectsRequestFailed,
	projectsRequested,
	projectCreated,
	projectRemoved,
} = actions

const projectRemovingFailed = createAction('projects/projectRemovingFailed')
const projectAddingFailed = createAction('projects/projectAddingFailed')

export const loadProjectsList = userId => async (dispatch, getState) => {
	dispatch(projectsRequested)
	try {
		const { content } = await projectsService.getProjects(userId)
		dispatch(projectsReceived(content))
	} catch (error) {
		dispatch(projectsRequestFailed(error.message))
	}
}

export const removeProject = id => async dispatch => {
	try {
		const { content } = await projectsService.removeProject(id)

		if (!content) {
			dispatch(projectRemoved(id))
		}
	} catch (error) {
		dispatch(projectRemovingFailed(error.message))
	}
}

export const createProject = payload => async (dispatch, getState) => {
	try {
		const { content } = await projectsService.createProject(payload)
		dispatch(projectCreated(content))
	} catch (error) {
		dispatch(projectAddingFailed(error.message))
	}
}

export const getProjects = () => state => state.projects.entities

export const getProjectsLoadingStatus = () => state => state.projects.isLoading

export const getProjectsList = () => state => {
	if (state.projects.entities) {
		return state.projects.entities
	}
	return null
}
export const getCategoryList = () => state => {
	if (state.projects.entities.categories) {
		return state.projects.entities.categories
	}
	return null
}

export const getTimeSum = () => state =>
	state.projects.entities?.reduce((acc, elem) => acc + Number(elem.time), 0)

export const getProjectsAmount = () => state => state.projects.entities?.length

export const getLongestSession = () => state => {
	let longestSession = 0
	const projects = state.projects.entities

	projects?.forEach(project => {
		if (project.time > longestSession) {
			longestSession = project.time
		}
	})

	return longestSession
}

export default projectsReducer
