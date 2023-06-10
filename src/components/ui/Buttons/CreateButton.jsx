import React from 'react'
import PropTypes from 'prop-types'

function CreateButton({ onClick, upperCase }) {
  return (
    <button
      type='button'
      className={`bg-lightGreen ${
			upperCase ? 'uppercase max-w-[12.3125rem] sm:block' : null
      } transition duration-300 text-base font-semibold rounded-xl py-4 w-full hover:bg-lime`}
      onClick={onClick}
    >
      {upperCase ? 'Сохранить' : 'Создать'}
    </button>
  )
}

CreateButton.defaultProps = {
  upperCase: false,
  onClick: null,
}

CreateButton.propTypes = {
  onClick: PropTypes.func,
  upperCase: PropTypes.bool,
}

export default CreateButton
