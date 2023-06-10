import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from '@reduxjs/toolkit'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import AddButton from '@/components/ui/Buttons/AddButton'
import ExitButton from '@/components/ui/Buttons/ExitButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { acceptBtn } from '@/assets/assets'

function AddProjectColumn({ onClick, onChange }) {
  const [isInputVisible, setIsVisible] = React.useState(false)
  const [sideCategories, setSideCategories] = React.useState([])

  const handleInputVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const addNewCategory = (categoryName) => {
    setSideCategories((prevState) => [
      ...prevState,
      { name: categoryName, id: nanoid() },
    ])
  }

  return (
    <div className='flex flex-col p-6 rounded-xl sm:bg-mainColor sm:basis-[592px]'>
      <h2 className='font-bold text-[2.5rem] mb-4 sm:mb-[3.3125rem]'>
        Создать проект
      </h2>
      <div className='flex-1'>
        <TextField
          labelText='Название проекта'
          placeholder='Введите название'
          name='sideName'
          type='text'
          onChange={onChange}
        />
        <TextField
          labelText='Добавьте описание'
          placeholder='Введите описание'
          name='sideDescription'
          type='text'
          onChange={onChange}
        />
        <TextField
          labelText='Затраченое время в часах'
          placeholder='Введите время'
          name='sideTime'
          type='text'
          onChange={onChange}
        />
        <CategoryList
          categories={sideCategories}
          onEnter={addNewCategory}
          isVisible={isInputVisible}
          changeVisibility={setIsVisible}
        >
          <AddTagButton onClick={handleInputVisibility} />
        </CategoryList>
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
  onChange: PropTypes.func.isRequired,
}

export default AddProjectColumn
