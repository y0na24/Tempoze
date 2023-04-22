import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import { acceptBtn, cancelBtn } from '@/assets/assets'

function AddProjectColumn({ onClick }) {
  return (
    <div className='flex flex-col p-6 rounded-xl bg-mainColor basis-[592px]'>
      <h2 className='font-bold text-[2.5rem] mb-[3.3125rem]'>Создать проект</h2>
      <div className='flex-1'>
        <TextField
          labelText='Название проекта'
          placeholder='Введите название'
          name='projectName'
          type='text'
        />
        <TextField
          labelText='Добавьте описание'
          placeholder='Введите описание'
          name='description'
          type='text'
        />
        <TextField
          labelText='Затраченое время'
          placeholder='Введите время'
          name='projectName'
          type='text'
        />
        <CategoryList />
      </div>
      <div className='flex justify-end items-center gap-3'>
        <button
          type='button'
          className='bg-red rounded-full w-12 h-12 flex justify-center items-center hover:bg- transition duration-300'
          onClick={onClick}
        >
          <img src={cancelBtn} alt='Отменить' />
        </button>
        <button
          type='button'
          className='bg-lightGreen rounded-full w-16 h-16 flex justify-center items-center hover:bg-lime transition duration-300'
        >
          <img src={acceptBtn} alt='Добавить' />
        </button>
      </div>
    </div>
  )
}

AddProjectColumn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddProjectColumn
