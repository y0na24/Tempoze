import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { settings, exit } from '@/assets/assets'

function DropDown({ onClick }) {
  return (
    <div className='bg-black absolute rounded-xl right-[-35px] top-[65px] inline-block py-6 px-[2.375rem]'>
      <ul className='flex flex-col gap-4  '>
        <Link
          to='/profile'
          className='flex gap-3 hover:opacity-70 transition duration-200 uppercase'
          onClick={onClick}
        >
          <p className='uppercase text-base font-medium'>Настройки</p>
          <img src={settings} alt='Настройки' />
        </Link>
        <Link
          to='/'
          className='flex gap-3 self-end hover:opacity-70 transition duration-200 uppercase'
          onClick={onClick}
        >
          <p className='uppercase text-base font-medium'>Выйти</p>
          <img src={exit} alt='Выход' />
        </Link>
      </ul>
    </div>
  )
}

DropDown.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DropDown
