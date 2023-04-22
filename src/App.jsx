import { Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import Analytics from '@/pages/Analytics'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
