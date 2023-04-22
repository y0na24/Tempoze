import React from 'react'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import { playBtn } from '@/assets/assets'

function TimerColumn() {
  return (
    <div className='pt-16 px-16 flex flex-col rounded-xl bg-mainColor basis-[980px]'>
      <div className='flex gap-6 mb-12'>
        <p className='font-bold text-[4rem]'>00:00</p>
        <button type='button'>
          <img src={playBtn} alt='Старт' width={64} height={64} />
        </button>
      </div>
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
      <CategoryList />
    </div>
  )
}

export default TimerColumn
