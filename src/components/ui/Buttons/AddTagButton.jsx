import React from 'react'

import { addNewCategory } from '@/assets/assets'

function AddTagButton() {
  return (
    <button
      type='button'
      className='flex items-center justify-center bg-[#3F3E43] w-8 h-8 rounded-full'
    >
      <img src={addNewCategory} alt='Добавить категорию' />
    </button>
  )
}

export default AddTagButton
