import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import FormButton from '@/components/ui/Buttons/FormButton'
import TextField from '@/components/ui/TextField'
import FormButtonDesk from '@/components/ui/Buttons/FormButtonDesk'

import { loginSchema } from '@/utils/validation'

import { singIn } from '@/store/userSlice'

function Form({ title }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
	} = useForm({ resolver: yupResolver(loginSchema) })

	const handleFormSubmit = async () => {
		try {
			await dispatch(singIn(getValues()))
			reset()
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

			<FormButtonDesk display='hidden sm:block' label='Войти' />
			<FormButton display='sm:hidden' label='Войти' />

			<div className='flex items-center justify-between'>
				<Link to={'/signUp'} className='text-sm text-white underline'>
					Не зарегестрированы?
				</Link>
				<div className='flex items-center gap-[0.375rem]'>
					<input
						className='text-lightGreen border-0 h-4 w-4 accent-white cursor-pointer  focus:text-primary focus:ring-offset-0 focus:ring-0 rounded'
						type='checkbox'
						name='rememberName'
						id='remember'
					/>
					<label className='text-sm text-white' htmlFor='rememberName'>
						Запомнить меня
					</label>
				</div>
			</div>
		</form>
	)
}

Form.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Form
