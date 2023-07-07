import React from 'react'
import PropTypes from 'prop-types'

import { cross } from '@/assets/assets'

function Modal({ isVisible, onClose, description }) {
  return (
    isVisible && (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex justify-center items-center'>
      <div className='sm:w-[600px] w-[300px] flex flex-col translate-y-[-120px]'>
        <button
          type='button'
          className='text-white text-xl place-self-end mb-2'
          onClick={onClose}
        >
          <img
            src={cross}
            alt='Закрыть модальное окно'
            width={24}
            height={24}
          />
        </button>
        <div className='bg-mainColor h-20 p-4 rounded border'>
          {description}
        </div>
      </div>
    </div>
    )
  )
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  description: PropTypes.string,
}

export default Modal
