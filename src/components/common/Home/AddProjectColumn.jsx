import PropTypes from 'prop-types'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import AddButton from '@/components/ui/AddButton'
import ExitButton from '@/components/ui/ExitButton'

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
        <ExitButton onClick={onClick} />
        <AddButton />
      </div>
    </div>
  )
}

AddProjectColumn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddProjectColumn
