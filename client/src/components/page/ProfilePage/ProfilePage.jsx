import React from 'react'

import UserCard from '@/components/common/Profile/UserCard'

import { profileHeader } from '@/assets/assets'
import ProfileForm from '@/components/common/Profile/ProfileForm'

function ProfilePage() {
	return (
		<>
			<img
				className='rounded-2xl m-auto mt-3 -z-10 hidden xl:block'
				src={profileHeader}
				alt='Обои'
			/>
			<div className='px-4 relative mt-4 xl:mt-[-70px] z-10 m-auto max-w-[40.625rem]'>
				<UserCard userName='username' birthDate='01.01.1990' />
				<ProfileForm />
			</div>
		</>
	)
}

export default ProfilePage
