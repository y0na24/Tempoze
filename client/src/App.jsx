import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/common/Layout'
import Analytics from '@/layouts/Analytics'
import Home from '@/layouts/Home'
import Login from '@/layouts/Login'
import SignUp from '@/layouts/SignUp'
import History from './layouts/History'
import Profile from './layouts/Profile'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='/login' />} />
					<Route path='login' element={<Login />} />
					<Route path='signUp' element={<SignUp />} />
					<Route path='home' element={<Home />} />
					<Route path='history' element={<History />} />
					<Route path='analytics' element={<Analytics />} />
					<Route path='profile' element={<Profile />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	)
}

export default App
