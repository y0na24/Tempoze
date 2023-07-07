import React from 'react'
import PropTypes from 'prop-types'

function CreateButton({ onClick, upperCase }) {
  const styles = upperCase ? 'uppercase max-w-[12.3125rem] hidden sm:block' : ''

  return (
    <button
      type='submit'
      className={`${styles} bg-lightGreen 
			transition duration-300 text-base font-semibold rounded-xl py-4 w-full hover:bg-lime`}
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
