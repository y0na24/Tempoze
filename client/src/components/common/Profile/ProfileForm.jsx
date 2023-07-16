import React from 'react'
import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import CreateButton from '@/components/ui/Buttons/CreateButton'

import { acceptBtn, profileHeader } from '@/assets/assets'

const ProfileForm = () => {
	const handleSubmit = e => {
		e.preventDefault()
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				labelText='Имя пользователя'
				type='text'
				placeholder='Логин'
				name='username'
			/>
			<TextField
				labelText='Email'
				type='email'
				placeholder='test@mail.com'
				name='email'
			/>
			<TextField
				labelText='Новый пароль'
				type='password'
				placeholder='***'
				name='password'
			/>
			<TextField
				labelText='Повторить пароль'
				type='password'
				placeholder='***'
				name='acceptPassword'
			/>
			<div className='flex justify-between items-center'>
				<a href=''>Отменить</a>
				<AddButton image={acceptBtn} display='sm:hidden' />
				<CreateButton upperCase />
			</div>
		</form>
	)
}

export default ProfileForm
