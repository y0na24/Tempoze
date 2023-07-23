import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'
import { getCurrentUserData } from '@/store/userSlice'

function UserCard() {
	const currentUser = useSelector(getCurrentUserData())

	return !currentUser ? (
		<h2>Loading...</h2>
	) : (
		<div className='flex z-10 p-4 bg-mainColor rounded-xl items-center mb-12'>
			<img
				loading='lazy'
				className='rounded-xl mr-[0.625rem] w-[92px] h-[92px] bg-white'
				src={currentUser.image}
				alt='Аватарка'
			/>
			<div className='flex flex-col gap-[0.625rem]'>
				<p className='uppercase font-semibold text-2xl'>{currentUser.name}</p>
			</div>
		</div>
	)
}

UserCard.propTypes = {
	userName: PropTypes.string.isRequired,
}

export default UserCard
