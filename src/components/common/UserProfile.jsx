import React from 'react'
import PropTypes from 'prop-types'

import { dropDownArrow, profileAvatar } from '@/assets/assets'
import DropDown from '@/components/ui/DropDown'

function UserProfile({ userName }) {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <div className='relative'>
      <div className='flex items-center'>
        <button type='button' onClick={toggleMenu}>
          <img
            className={`m-[0.625rem] ${showMenu ? 'rotate-[-90deg]' : null}`}
            loading='lazy'
            src={dropDownArrow}
            alt='Выпадающее меню'
          />
        </button>
        <p className='uppercase text-base font-semibold mr-3'>{userName}</p>
        <img className='w-9 h-9 rounded-md' src={profileAvatar} alt='Аватрка' />
      </div>
      {showMenu && <DropDown onClick={closeMenu} />}
    </div>
  )
}

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default UserProfile
