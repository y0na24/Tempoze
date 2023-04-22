import DesktopHeader from './DesktopHeader'
import LoginHeader from './LoginHeader'

function Header() {
  return (
    <div className='px-3 mt-3'>
      <div className='hidden sm:block'>
        <DesktopHeader />
      </div>
      <div className='sm:hidden'>
        <LoginHeader />
      </div>
    </div>
  )
}

export default Header
