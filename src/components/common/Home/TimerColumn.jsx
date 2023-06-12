import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import CategoryList from './CategoryList'
import TextField from '@/components/ui/TextField'
import AddButton from '@/components/ui/Buttons/AddButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { addNewProject } from '@/store/projectsSlice'

import { playBtn, acceptBtn } from '@/assets/assets'

function TimerColumn({
  time,
  onChange,
  onEnter,
  currentProject,
  currentCategories,
}) {
  const dispatch = useDispatch()
  const [isInputVisible, setIsVisible] = React.useState(false)

  const handleInputVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewProject(currentProject))
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
      >
        <AddTagButton onClick={handleInputVisibility} />
      </CategoryList>
      <AddButton margin='ml-auto' image={acceptBtn} />
    </form>
  )
}

TimerColumn.propTypes = {
  time: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  currentProject: PropTypes.object,
  currentCategories: PropTypes.array,
  onEnter: PropTypes.func,
}

export default TimerColumn
