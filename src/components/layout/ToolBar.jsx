import React from 'react'
import {
	toolbarAnalytics,
	toolbarCreate,
	toolbarHome,
	toolbarProfile,
} from '@/assets/assets'

const ToolBar = () => {
	return (
			<div className='pb-3'>
				<nav className='bg-mainColor py-[1.625rem] px-7 rounded-xl'>
					<ul className='flex items-center justify-between'>
						<li>
							<img src={toolbarHome} alt='' width='20' height='20' />
						</li>
						<li>
							<img src={toolbarCreate} alt='' width='20' height='20' />
						</li>
						<li>
							<img src={toolbarAnalytics} alt='' width='20' height='20' />
						</li>
						<li>
							<img src={toolbarProfile} alt='' width='20' height='20' />
						</li>
					</ul>
				</nav>
			</div >
	)
}

export default ToolBar
