import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { getIsLoggedIn } from '@/store/userSlice'

const AuthRequiredLayout = () => {
	const isLoggedIn = useSelector(getIsLoggedIn())

	if (!isLoggedIn) {
		return <Navigate to='/login' />
	}

	return <Outlet />
}

export default AuthRequiredLayout
