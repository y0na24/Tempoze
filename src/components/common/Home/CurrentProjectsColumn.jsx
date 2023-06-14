import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import CategoryList from './CategoryList'
import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { addNewProject } from '@/store/projectsSlice'

import { playBtn, acceptBtn } from '@/assets/assets'
import pluralizeHours from '@/utils/pluralizeHours'

function CurrentProjectsColumn({
  time,
  onChange,
  onEnter,
  onDelete,
  currentProject,
  currentCategories,
  onSubmit,
}) {
  const dispatch = useDispatch()
  const [isInputVisible, setIsVisible] = React.useState(false)

  const handleInputVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const project = {
      ...currentProject,
      time: pluralizeHours(currentProject.time),
      _id: nanoid(),
    }

    dispatch(addNewProject(project))
    onSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='pt-16 sm:px-16 flex-col rounded-xl sm:bg-mainColor basis-[61.25rem]'
    >
      <div className='flex items-center gap-6 mb-12'>
        <p className='font-bold text-5xl sm:text-[4rem]'>{time}</p>
        <button type='button'>
          <img src={playBtn} alt='Старт' width={53} height={53} />
        </button>
      </div>
      <TextField
        labelText='Название проекта'
        placeholder='Введите название'
        name='name'
        type='text'
        onChange={onChange}
      />
      <TextField
        labelText='Добавьте описание'
        placeholder='Введите описание'
        name='description'
        type='text'
        onChange={onChange}
      />
      <CategoryList
        categories={currentCategories}
        onEnter={onEnter}
        isVisible={isInputVisible}
        changeVisibility={setIsVisible}
        onDelete={onDelete}
      >
        {currentCategories.length < 3 && (
        <AddTagButton onClick={handleInputVisibility} />
        )}
      </CategoryList>
      <AddButton margin='ml-auto' image={acceptBtn} />
    </form>
  )
}

CurrentProjectsColumn.propTypes = {
  time: PropTypes.string,
  onChange: PropTypes.func,
  currentProject: PropTypes.object,
  currentCategories: PropTypes.array,
  onEnter: PropTypes.func,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
}

export default CurrentProjectsColumn
