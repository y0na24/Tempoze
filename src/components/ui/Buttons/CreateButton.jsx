import React from 'react'
import PropTypes from 'prop-types'

function CreateButton({ onClick, width }) {
  return (
    <button
      type='button'
      className={`bg-lightGreen ${width ? 'uppercase' : null} ${
        width ? 'sm:block' : null
      } ${width} hidden transition duration-300 text-base font-semibold rounded-xl py-4 w-full hover:bg-lime`}
      onClick={onClick}
    >
      Создать
    </button>
  )
}

CreateButton.defaultProps = {
  width: null,
  onClick: null,
}

CreateButton.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
}

export default CreateButton
