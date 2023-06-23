import { NavLink, useLocation } from 'react-router-dom'

import UserProfile from '@/components/common/UserProfile'

function DesktopHeader() {
  const location = useLocation()

  const isStartingPage = location.pathname === '/'

  const isDisabledLink = isStartingPage
    ? 'pointer-events-none opacity-50 cursor-not-allowed'
    : null

  return (
    <nav className='bg-black flex items-center justify-between w-full m-auto px-[2.1875rem] py-[1.125rem] rounded-xl'>
      <ul className='text-white font-semibold text-base flex gap-8'>
        <NavLink to='/home' className={isDisabledLink}>
          <li className='hover:opacity-70 transition duration-200 uppercase'>
            Главная
          </li>
        </NavLink>
        <NavLink to='/analytics' className={isDisabledLink}>
          <li className='hover:opacity-70 transition duration-200 uppercase'>
            Аналитика
          </li>
        </NavLink>
      </ul>
      {!isStartingPage && <UserProfile userName='userName' />}
    </nav>
  )
}

export default DesktopHeader
