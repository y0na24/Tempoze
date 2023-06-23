import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-white px-5 text-lg'>
      Такой страницы не существует. Возвращайтесь на
      {' '}
      <Link to='/' className='text-lightGreen'>
        Главную
      </Link>
    </div>
  )
}

export default NotFound
