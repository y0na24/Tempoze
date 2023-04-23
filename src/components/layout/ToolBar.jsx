import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import {
  toolbarAnalytics,
  toolbarCreate,
  toolbarHome,
  toolbarProfile,
} from '@/assets/assets'

function ToolBar({ display }) {
  return (
    <div className={`${display} pb-3 mx-3`}>
      <nav className='bg-mainColor py-[1.625rem] px-7 rounded-xl'>
        <ul className='flex items-center justify-between'>
          <li>
            <NavLink to='/'>
              <img src={toolbarHome} alt='Главная' width='20' height='20' />
            </NavLink>
          </li>
          <li>
            <NavLink to='history'>
              <img
                src={toolbarCreate}
                alt='Создать задачу'
                width='20'
                height='20'
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/analytics'>
              <img
                src={toolbarAnalytics}
                alt='Аналитика'
                width='20'
                height='20'
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile'>
              <img src={toolbarProfile} alt='Профиль' width='20' height='20' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

ToolBar.propTypes = {
  display: PropTypes.string.isRequired,
}

export default ToolBar
