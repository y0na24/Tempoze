import { object, string } from 'yup'

const loginSchema = object({
  email: string().email('Введите корректный email').required('Заполните почту'),
  password: string()
    .required('Заполните пароль')
    .min(8, 'Пароль должен состять минимум из 8 символов'),
})

export default loginSchema
