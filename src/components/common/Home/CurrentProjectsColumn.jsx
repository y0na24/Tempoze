import React from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import CategoryList from './CategoryList'
import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'
import Timer from './Timer'

import { addNewProject } from '@/store/projectsSlice'

import { acceptBtn } from '@/assets/assets'

import { categoryColors } from '@/constants'

const initialState = {
  name: '',
  description: '',
  time: '',
  categories: [],
}

function CurrentProjectsColumn() {
  const dispatch = useDispatch()
  const [isInputVisible, setIsVisible] = React.useState(false)
  const [currentProject, setCurrentProject] = React.useState(initialState)
  const [time, setTime] = React.useState({ s: 0, m: 0, h: 0 })

  const initiateCurrentState = () => {
    setCurrentProject(initialState)
  }

  const handleInputVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleCurrentChange = (target) => {
    setCurrentProject((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const debouncedCurrentChangeHandler = React.useCallback(
    debounce(handleCurrentChange, 200),
    [],
  )

  const addCurrentCategory = (categoryName) => {
    setCurrentProject((prevState) => {
      const order = prevState.categories.length

      return {
        ...prevState,
        categories: [
          ...prevState.categories,
          {
            name: categoryName,
            id: nanoid(),
            color: categoryColors[order],
          },
        ],
      }
    })
  }

  const deleteCurrentCategory = (id) => {
    setCurrentProject((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((category) => category.id !== id),
    }))
  }

  const resetTimer = () => {
    setTime({ s: 0, m: 0, h: 0 })
  }

  const updateTimer = (updatedS, updatedM, updatedH) => {
    setTime({ s: updatedS, m: updatedM, h: updatedH })
  }

  const convertTimeToHours = () => {
    const totalSeconds = time.h * 3600 + time.m * 60 + time.s
    const totalHours = totalSeconds / 3600
    return totalHours.toFixed(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const project = {
      ...currentProject,
      time: convertTimeToHours(),
      _id: nanoid(),
    }

    dispatch(addNewProject(project))
    setTime({ s: 0, m: 0, h: 0 })
    initiateCurrentState()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='pt-16 sm:px-16 flex-col rounded-xl sm:bg-mainColor basis-[61.25rem]'
    >
      <Timer time={time} updateTimer={updateTimer} restartTimer={resetTimer} />
      <TextField
        labelText='Название проекта'
        placeholder='Введите название'
        name='name'
        type='text'
        onChange={debouncedCurrentChangeHandler}
      />
      <TextField
        labelText='Добавьте описание'
        placeholder='Введите описание'
        name='description'
        type='text'
        onChange={debouncedCurrentChangeHandler}
      />
      <CategoryList
        categories={currentProject.categories}
        onEnter={addCurrentCategory}
        isVisible={isInputVisible}
        changeVisibility={setIsVisible}
        onDelete={deleteCurrentCategory}
      >
        {currentProject.categories.length < 3 && (
        <AddTagButton onClick={handleInputVisibility} />
        )}
      </CategoryList>
      <AddButton margin='ml-auto' image={acceptBtn} />
    </form>
  )
}

export default CurrentProjectsColumn
