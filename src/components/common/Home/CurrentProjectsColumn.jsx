import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import CategoryList from './CategoryList'
import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { addNewProject } from '@/store/projectsSlice'

import { acceptBtn } from '@/assets/assets'
import pluralizeHours from '@/utils/pluralizeHours'
import Timer from './Timer'

function CurrentProjectsColumn({
  onChange,
  onEnter,
  onDelete,
  currentProject,
  currentCategories,
  onSubmit,
}) {
  const dispatch = useDispatch()
  const [isInputVisible, setIsVisible] = React.useState(false)
  const [time, setTime] = React.useState({ s: 0, m: 0, h: 0 })
  const [interv, setInterv] = React.useState()
  const [status, setStatus] = React.useState(false)
  // 0 - выключен
  // 1 - работает
  // 2 - пауза

  const startTimer = () => {
    runTimer()
    setStatus(true)
    setInterv(setInterval(runTimer, 10))
  }

  const stopTimer = () => {
    clearInterval(interv)
    setStatus(false)
  }

  const resetTimer = () => {
    clearInterval(interv)
    setStatus(false)
    setTime({ s: 0, m: 0, h: 0 })
  }

  let updatedS = time.s
  let updatedM = time.m
  let updateH = time.h

  const runTimer = () => {
    if (updatedM === 60) {
      updateH++
      updatedM = 0
    }

    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }

    updatedS++
    setTime({ s: updatedS, m: updatedM, h: updateH })
  }

  const convertTimeToHours = () => {
    const totalSeconds = time.h * 3600 + time.m * 60 + time.s
    const totalHours = totalSeconds / 3600
    return totalHours.toFixed(1)
  }

  const handleInputVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const project = {
      ...currentProject,
      time: pluralizeHours(convertTimeToHours()),
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
      <Timer
        time={time}
        status={status}
        start={startTimer}
        stop={stopTimer}
        reset={resetTimer}
      />
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
