import PropTypes from 'prop-types'

import { login } from '@/assets/assets'

import styles from '../styles'

function FormButtonDesk({ display, label }) {
	return (
		<button className={`${styles.formButtonDesk} ${display}`} type='submit'>
			<div className='flex items-center justify-center'>
				{label}
				<img
					className='ml-4'
					loading='lazy'
					src={login}
					alt='Войти'
					width='20'
					height='20'
				/>
			</div>
		</button>
	)
}

FormButtonDesk.propTypes = {
	display: PropTypes.string.isRequired,
}

export default FormButtonDesk
