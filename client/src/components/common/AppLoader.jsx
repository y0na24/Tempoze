import React from 'react'
import PropTypes from 'prop-types'

import {
	getCurrentUserId,
	getIsLoggedIn,
	getUsersLoadingStatus,
	loadUser,
} from '@/store/userSlice'

import { useDispatch, useSelector } from 'react-redux'
import Loader from '../ui/Loader'
import { loadProjectsList } from '@/store/projectsSlice'

const AppLoader = ({ children }) => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(getIsLoggedIn())
	const usersStatus = useSelector(getUsersLoadingStatus())
	const currentUserId = useSelector(getCurrentUserId())

	React.useEffect(() => {
		if (isLoggedIn) {
			dispatch(loadUser(currentUserId))
			dispatch(loadProjectsList(currentUserId))
		}
	}, [isLoggedIn, currentUserId])

	return usersStatus ? <Loader /> : children
}

AppLoader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default AppLoader
