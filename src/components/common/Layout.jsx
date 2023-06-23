import { Outlet } from 'react-router-dom'

import Header from '../layout/Header/Header'
import ToolBar from '../layout/ToolBar'

function Layout() {
  return (
    <div className='min-h-screen flex flex-col mx-auto'>
      <header>
        <Header />
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer>
        <ToolBar display='sm:hidden' />
      </footer>
    </div>
  )
}

export default Layout
