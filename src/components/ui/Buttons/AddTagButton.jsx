import React from 'react'
import PropTypes from 'prop-types'

import { addNewCategory } from '@/assets/assets'

function AddTagButton({ onClick }) {
  return (
    <button
      type='button'
      className='flex items-center justify-center bg-[#3F3E43] w-8 h-8 rounded-full'
      onClick={onClick}
    >
      <img src={addNewCategory} alt='Добавить категорию' />
    </button>
  )
}

AddTagButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddTagButton
