import PropTypes from 'prop-types'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import AddButton from '@/components/ui/Buttons/AddButton'
import ExitButton from '@/components/ui/Buttons/ExitButton'

import { acceptBtn } from '@/assets/assets'

function AddProjectColumn({ onClick }) {
  return (
    <div className='flex flex-col p-6 rounded-xl sm:bg-mainColor sm:basis-[592px]'>
      <h2 className='font-bold text-[2.5rem] mb-4 sm:mb-[3.3125rem]'>
        Создать проект
      </h2>
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
      <div className='flex justify-end items-center gap-3 mt-6'>
        <ExitButton onClick={onClick} />
        <AddButton image={acceptBtn} />
      </div>
    </div>
  )
}

AddProjectColumn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddProjectColumn
