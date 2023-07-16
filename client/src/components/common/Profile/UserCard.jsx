import React from 'react'
import PropTypes from 'prop-types'

import { profileAvatar } from '@/assets/assets'

function UserCard({ userName }) {
	return (
		<div className='flex z-10 p-4 bg-mainColor rounded-xl items-center mb-12'>
			<img
				loading='lazy'
				className='rounded-xl mr-[0.625rem]'
				src={profileAvatar}
				alt='Аватарка'
			/>
			<div className='flex flex-col gap-[0.625rem]'>
				<p className='uppercase font-semibold text-2xl'>{userName}</p>
			</div>
		</div>
	)
}

UserCard.propTypes = {
	userName: PropTypes.string.isRequired,
}

export default UserCard
