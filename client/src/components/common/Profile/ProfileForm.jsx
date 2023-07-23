import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import CreateButton from '@/components/ui/Buttons/CreateButton'

import { getCurrentUserData, logOut, updateUserData } from '@/store/userSlice'

import { updateUserSchema } from '@/utils/validation'

import { acceptBtn } from '@/assets/assets'

const ProfileForm = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(getCurrentUserData())

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
	} = useForm({ resolver: yupResolver(updateUserSchema) })

	const handleFormSubmit = () => {
		const updatedData = {
			...currentUser,
			...getValues(),
		}
		dispatch(updateUserData(updatedData))
		reset()
	}

	const handleImageChange = () => {
		const updatedAvatar = {
			...currentUser,
			image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
				.toString(36)
				.substring(7)}.svg`,
		}
		dispatch(updateUserData(updatedAvatar))
	}

	const logOutUser = () => {
		dispatch(logOut())
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<TextField
				labelText='Имя пользователя'
				type='text'
				placeholder='Новый логин'
				name='name'
				register={register}
				error={errors.name?.message}
			/>
			<button onClick={handleImageChange} type='button' className='bg-lime p-2 rounded-md mb-10'>
				Поменять аватарку
			</button>

			<div className='flex justify-between items-center'>
				<Link to='/' onClick={logOutUser} className='text-rose-600'>
					Выйти из аккаунта
				</Link>
				<AddButton image={acceptBtn} display='sm:hidden' />
				<CreateButton upperCase />
			</div>
		</form>
	)
}

export default ProfileForm
