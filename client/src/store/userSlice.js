import { createAction, createSlice } from '@reduxjs/toolkit'

import userService from '@/services/user.service'
import authService from '@/services/auth.service'
import localStorageService from '@/services/localStorage.service'

import generateAuthError from '@/utils/generateAuthError'
import { toast } from 'react-toastify'

const initialState = localStorageService.getAccessToken()
	? {
			entities: [],
			isLoading: true,
			error: null,
			auth: { userId: localStorageService.getUserId() },
			isLoggedIn: true,
			dataLoaded: false,
	  }
	: {
			entities: [],
			isLoading: false,
			error: null,
			auth: null,
			isLoggedIn: false,
			dataLoaded: false,
	  }

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		usersRequested(state) {
			state.isLoading = true
		},
		usersReceived(state, action) {
			state.entities = action.payload
			state.dataLoaded = true
			state.isLoading = false
		},
		usersRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		authRequestSuccess(state, action) {
			state.auth = action.payload
			state.isLoggedIn = true
		},
		authRequestFailed(state, action) {
			state.error = action.payload
		},
		userCreated(state, action) {
			state.entities.push(action.payload)
		},
		userLoggedOut(state) {
			state.entities = []
			state.isLoggedIn = false
			state.auth = null
			state.dataLoaded = false
		},
		userUpdated(state, action) {
			state.entities = action.payload
		},
		userUpdatedFailed(state, action) {
			state.error = action.payload
		},
		authRequested(state) {
			state.error = null
		},
	},
})

const { reducer: usersReducer, actions } = usersSlice
const {
	usersReceived,
	usersRequested,
	usersRequestFailed,
	authRequested,
	authRequestSuccess,
	authRequestFailed,
	userLoggedOut,
	userUpdated,
	userUpdatedFailed,
} = actions

const userUpdateRequsted = createAction('users/userUpdateRequested')

export const singIn = payload => async dispatch => {
	const { email, password } = payload

	dispatch(authRequested)

	try {
		const data = await authService.signIn({ email, password })
		localStorageService.setTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId }))
		dispatch(loadUser(data.userId))
	} catch (error) {
		const { code, message } = error.response.data.error
		if (code === 400) {
			const errorMessage = generateAuthError(message)
			dispatch(authRequestFailed(errorMessage))
			toast.error(errorMessage)
		} else {
			dispatch(authRequestFailed(error.message))
		}
		throw new Error(error.message)
	}
}

export const signUp = payload => async dispatch => {
	dispatch(authRequested())
	try {
		const data = await authService.register(payload)
		localStorageService.setTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId }))
	} catch (error) {
		const { code, message } = error.response.data.error
		if (code === 400) {
			const errorMessage = generateAuthError(message)
			dispatch(authRequestFailed(errorMessage))
		} else {
			dispatch(authRequestFailed(error.message))
		}
		throw new Error(e.message)
	}
}

export const logOut = () => dispatch => {
	localStorageService.removeAuthData()
	dispatch(userLoggedOut())
}

export const loadUser = id => async (dispatch, getState) => {
	dispatch(usersRequested())
	try {
		const { content } = await userService.get(id)
		dispatch(usersReceived(content))
	} catch (error) {
		dispatch(usersRequestFailed(error.message))
	}
}

export const getUserById = userId => state => {
	if (state.users.entities) {
		const users = state.users.entities
		return users.find(u => u._id === userId)
	}
}

export const updateUserData = data => async dispatch => {
	dispatch(userUpdateRequsted())
	try {
		const { content } = await userService.update(data)
		dispatch(userUpdated(content))
	} catch (error) {
		toast.error(error.message)
		dispatch(userUpdatedFailed(error.message))
	}
}

export const getUsersList = () => state => state.users.entities

export const getUsersLoadingStatus = () => state => state.users.isLoading

export const getCurrentUserId = () => state => {
	if (state.users.auth?.userId) {
		return state.users.auth.userId
	}
	return null
}

export const getCurrentUserData = () => state => {
	if (state.users.entities) {
		return state.users.entities
	}
	return null
}

export const getIsLoggedIn = () => state => state.users.isLoggedIn

export const getDataStatus = () => state => state.users.dataLoaded

export const getAuthError = () => state => state.users.error

export default usersReducer
