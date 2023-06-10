import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action) {
      state.entities = action.payload
    },
  },
})

const { reducer: projectsReducer, actions } = projectsSlice
const { addProject } = actions

export default projectsReducer
