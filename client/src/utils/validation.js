import { object, string } from 'yup'

export const loginSchema = object({
	email: string().email('Введите корректный email').required('Заполните почту'),
	password: string()
		.required('Заполните пароль')
		.min(8, 'Пароль должен состять минимум из 8 символов'),
})

export const signUpSchema = object({
	email: string().email('Введите корректный email').required('Заполните почту'),
	password: string()
		.required('Заполните пароль')
		.min(8, 'Пароль должен состять минимум из 8 символов'),
	name: string().required('Заполните логин'),
})

export const updateUserSchema = object({
	email: string().email('Введите корректный email'),
	login: string(),
})
