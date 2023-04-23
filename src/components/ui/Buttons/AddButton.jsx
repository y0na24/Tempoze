import PropTypes from 'prop-types'

function AddButton({ onClick, margin, image }) {
	return (
		<button
			type='button'
			className={`bg-lightGreen ${margin} rounded-full w-16 h-16 flex justify-center items-center hover:bg-lime transition duration-300`}
			onClick={onClick}
		>
			<img src={image} alt='Добавить' />
		</button>
	)
}

AddButton.defaultProps = {
	onClick: null,
	margin: 'm-0',
}

AddButton.propTypes = {
	onClick: PropTypes.func,
	margin: PropTypes.string,
	image: PropTypes.string.isRequired,
}

export default AddButton
