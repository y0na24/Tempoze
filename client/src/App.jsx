import { Suspense, lazy } from 'react'
import { getIsLoggedIn } from './store/userSlice'
import { Route, Routes, Navigate } from 'react-router-dom'

import Layout from './components/common/Layout'
import AppLoader from './components/ui/hoc/AppLoader'
import Loader from './components/ui/Loader'

import Analytics from '@/layouts/Analytics'
import Home from '@/layouts/Home'
import Login from '@/layouts/Login'
import SignUp from '@/layouts/SignUp'
import History from './layouts/History'

import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import AuthRequiredLayout from './components/ui/hoc/AuthRequire'

const Profile = lazy(() => import('./layouts/Profile'))

function App() {
	const isLoggedIn = useSelector(getIsLoggedIn())

	return (
		<AppLoader>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='/login' />} />
					<Route
						path='login'
						element={isLoggedIn ? <Navigate to='/home' /> : <Login />}
					/>
					<Route
						path='signUp'
						element={isLoggedIn ? <Navigate to='/home' /> : <SignUp />}
					/>
					<Route element={<AuthRequiredLayout />}>
						<Route path='home' element={<Home />} />
						<Route path='history' element={<History />} />
						<Route path='analytics' element={<Analytics />} />
						<Route
							path='profile'
							element={
								<Suspense fallback={<Loader />}>
									<Profile />
								</Suspense>
							}
						/>
						<Route path='*' element={<Navigate to='/home' />} />
					</Route>
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			</Routes>
			<ToastContainer />
		</AppLoader>
	)
}

export default App
