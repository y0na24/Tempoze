import React from 'react'
import PropTypes from 'prop-types'

const CreateButton = ({ onClick }) => {
	return (
		<button
			type='button'
			className='bg-lightGreen transition duration-300 text-base font-semibold rounded-xl py-4 w-full hover:bg-lime'
			onClick={onClick}
		>
			Создать
		</button>
	)
}

CreateButton.propTypes = {
	onClick: PropTypes.func.isRequired,
}

export default CreateButton
