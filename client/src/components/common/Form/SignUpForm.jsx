import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import FormButton from '@/components/ui/Buttons/FormButton'
import TextField from '@/components/ui/TextField'
import FormButtonDesk from '@/components/ui/Buttons/FormButtonDesk'

import { signUpSchema } from '@/utils/validation'
import { signUp } from '@/store/userSlice'

function Form({ title }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
	} = useForm({ resolver: yupResolver(signUpSchema) })

	const handleFormSubmit = async () => {
		try {
			await dispatch(signUp(getValues()))
			navigate('/home')
		} catch (e) {
			console.log(e.message)
		}
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='mt-[8.4375rem] w-full max-w-[40rem] mx-auto px-5'
			noValidate
		>
			<h2 className='text-white font-bold text-5xl hidden xl:block mb-12'>
				{title}
			</h2>
			<TextField
				labelText='Email'
				type='email'
				name='email'
				placeholder='Введите почту'
				register={register}
				error={errors.email?.message}
			/>
			<TextField
				labelText='Пароль'
				type='password'
				name='password'
				register={register}
				placeholder='Введите пароль'
				error={errors.password?.message}
			/>
			<TextField
				labelText='Логин'
				type='name'
				name='name'
				placeholder='Введите логин'
				register={register}
				error={errors.name?.message}
			/>

			<FormButtonDesk display='hidden sm:block' label={'Регистрация'} />
			<FormButton display='sm:hidden' label={'Регистрация'} />

			<Link to={'/login'} className='text-sm text-white underline' href='/#'>
				Уже есть аккаунт?
			</Link>
		</form>
	)
}

Form.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Form
