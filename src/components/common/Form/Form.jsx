import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import TextField from '@/components/ui/TextField'

function Form({ children, title }) {
  const navigate = useNavigate()

  const handleRedirect = (event) => {
    event.preventDefault()
    navigate('/home')
  }

  return (
    <form
      onSubmit={handleRedirect}
      className='mt-[8.4375rem] w-full max-w-[40rem] mx-auto px-5'
    >
      <h2 className='text-white font-bold text-5xl hidden xl:block mb-12'>
        {title}
      </h2>
      <TextField
        labelText='Email'
        type='email'
        name='email'
        placeholder='Введите почту'
      />
      <TextField
        labelText='Пароль'
        type='password'
        name='password'
        placeholder='Введите пароль'
      />
      {children}
      <div className='flex items-center justify-between'>
        <a className='text-sm text-white underline' href='/#'>
          Забыли пароль?
        </a>
        <div className='flex items-center gap-[0.375rem]'>
          <input
            className='text-lightGreen border-0 h-4 w-4 accent-white cursor-pointer  focus:text-primary focus:ring-offset-0 focus:ring-0 rounded'
            type='checkbox'
            name='rememberName'
            id='remember'
          />
          <label className='text-sm text-white' htmlFor='rememberName'>
            Запомнить меня
          </label>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Form
