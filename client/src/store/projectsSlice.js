import { createSlice } from '@reduxjs/toolkit'

const projects =	localStorage.getItem('projects') !== null
	  ? JSON.parse(localStorage.getItem('projects'))
	  : []

const initialState = {
  entities: projects,
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    newProjectAdded(state, action) {
      state.entities.push(action.payload)
      localStorage.setItem('projects', JSON.stringify(state.entities))
    },
    projectDeleted(state, action) {
      state.entities = state.entities.filter(
        (project) => project._id !== action.payload,
      )
      localStorage.setItem('projects', JSON.stringify(state.entities))
    },
  },
})

const { reducer: projectsReducer, actions } = projectsSlice
const { newProjectAdded, projectDeleted } = actions

export const addNewProject = (payload) => (dispatch) => {
  dispatch(newProjectAdded(payload))
}

export const deleteProject = (projectId) => (dispatch) => {
  dispatch(projectDeleted(projectId))
}

// Selectors
export const getProjectsList = () => (state) => state.entities

export const getCategoryList = () => (state) => state.entities.categories

export const getTimeSum = () => (state) => state.entities.reduce((acc, elem) => acc + Number(elem.time), 0)

export const getProjectsAmount = () => (state) => state.entities.length

export const getLongestSession = () => (state) => {
  let longestSession = 0
  const projects = state.entities

  projects.forEach((project) => {
    if (project.time > longestSession) {
      longestSession = project.time
    }
  })

  return longestSession
}

export default projectsReducer
