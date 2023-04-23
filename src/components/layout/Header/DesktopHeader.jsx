import { NavLink } from 'react-router-dom'

function DesktopHeader() {
  return (
    <nav className='bg-black w-full m-auto px-[2.1875rem] py-[1.125rem] rounded-xl'>
      <ul className='text-white font-semibold text-base flex gap-8'>
        <NavLink to='/'>
          <li className='hover:opacity-70 transition duration-200 uppercase'>
            Главная
          </li>
        </NavLink>
        <NavLink to='/analytics'>
          <li className='hover:opacity-70 transition duration-200 uppercase'>
            Аналитика
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default DesktopHeader
