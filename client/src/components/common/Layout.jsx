import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from '../layout/Header/Header'
import ToolBar from '../layout/ToolBar'
import Loader from '../ui/Loader'

function Layout() {
	const location = useLocation()

	const [isLoading, setIsLoading] = React.useState(true)
	const [loaderValue, setLoaderValue] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setLoaderValue(oldValue => {
				const newValue = oldValue + 10

				if (newValue > 100) {
					setIsLoading(false)
					clearInterval(interval)
				}

				return newValue
			})
		}, 50)
	}, [])

	const toShowToolbar =
		location.pathname === '/login' || location.pathname === '/signUp'

	return (
		<div className='min-h-screen flex flex-col mx-auto'>
			<header>
				<Header />
			</header>
			<main className='flex-1'>
				{isLoading ? <Loader value={loaderValue} /> : <Outlet />}
			</main>
			<footer>{!toShowToolbar && <ToolBar display='sm:hidden' />}</footer>
		</div>
	)
}

export default Layout
