import React from 'react'

import { dropDownArrow } from '@/assets/assets'
import DropDown from '@/components/ui/DropDown'
import { useSelector } from 'react-redux'
import { getCurrentUserData } from '@/store/userSlice'

function UserProfile() {
	const currentUser = useSelector(getCurrentUserData())
	const [showMenu, setShowMenu] = React.useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeMenu = () => {
		setShowMenu(false)
	}

	return !currentUser ? (
		<h2>Loading...</h2>
	) : (
		<div className='relative'>
			<div className='flex items-center'>
				<button type='button' onClick={toggleMenu}>
					<img
						className={`m-[0.625rem] ${showMenu ? 'rotate-[-90deg]' : null}`}
						loading='lazy'
						src={dropDownArrow}
						alt='Выпадающее меню'
					/>
				</button>
				<p className='uppercase text-base font-semibold mr-3'>
					{currentUser?.name?.split(' ')[0]}
				</p>
				<img
					className='w-10 h-10 rounded-md bg-white'
					src={currentUser.image}
					alt='Аватрка'
				/>
			</div>
			{showMenu && <DropDown onClick={closeMenu} />}
		</div>
	)
}

export default UserProfile
