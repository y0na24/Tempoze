const generateAuthError = message => {
	switch (message) {
		case 'INVALID_PASSWORD':
			return 'Email или пароль введены некорректно'

		case 'EMAIL_EXISTS':
			return 'Пользователь с таким Email уже существует'

		default:
			return 'Неправильные данные'
	}
}

export default generateAuthError
