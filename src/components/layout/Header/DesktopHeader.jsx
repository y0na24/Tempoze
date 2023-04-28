import { NavLink, useLocation } from 'react-router-dom'

function DesktopHeader() {
  const location = useLocation()

  const isStartingPage = location.pathname === '/'

  const isDisabledLink = isStartingPage
    ? 'pointer-events-none opacity-50 cursor-not-allowed'
    : null

  return (
    <nav className='bg-black w-full m-auto px-[2.1875rem] py-[1.125rem] rounded-xl'>
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
    </nav>
  )
}

export default DesktopHeader
