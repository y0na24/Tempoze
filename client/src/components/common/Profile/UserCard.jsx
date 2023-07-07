import React from 'react'
import PropTypes from 'prop-types'

import { profileAvatar, calendar } from '@/assets/assets'

function UserCard({ userName, birthDate }) {
  return (
    <div className='flex z-10 p-4 bg-mainColor rounded-xl items-center mb-12'>
      <img
        loading='lazy'
        className='rounded-xl mr-[0.625rem]'
        src={profileAvatar}
        alt='Аватарка'
      />
      <div className='flex flex-col gap-[0.625rem]'>
        <p className='uppercase font-semibold text-2xl'>{userName}</p>
        <div className='flex'>
          <p className='uppercase font-medium text-base'>{birthDate}</p>
          <button type='button'>
            <img
              loading='lazy'
              className='m-1.5'
              src={calendar}
              alt='Дата'
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
}

export default UserCard
