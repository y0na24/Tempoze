import PropTypes from 'prop-types'
import styles from '../styles'

function FormButton({ display, label }) {
	return (
		<button className={`${styles.formButton} ${display}`} type='submit'>
			{label}
		</button>
	)
}

FormButton.propTypes = {
	display: PropTypes.string.isRequired,
}

export default FormButton
