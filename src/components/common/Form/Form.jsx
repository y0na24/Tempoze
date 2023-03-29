import FormButton from '@/components/ui/FormButton'
import TextField from '@/components/ui/TextField'
import React from 'react'

const Form = () => {
	return (
		<form style={{ flex: '1 1 auto' }}>
			<TextField
				labelText='Email'
				type='email'
				name='email'
				placeholder='Введите почту'
			/>
			<TextField
				labelText='Пароль'
				type='password'
				name='password'
				placeholder='Введите пароль'
			/>
			<FormButton />
			<div className='flex items-center justify-between'>
				<a className='text-sm text-white underline' href='#'>
					Забыли пароль?
				</a>
				<div className='flex items-center gap-[0.375rem]'>
					<input type='checkbox' name='remember' id='remember' />
					<label className='text-sm text-white' htmlFor='remember'>
						Запомнить меня
					</label>
				</div>
			</div>
		</form>
	)
}

export default Form
