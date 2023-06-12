import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import AddProjectColumn from '@/components/common/Home/AddProjectColumn'
import ProjectsColumn from '@/components/common/Home/ProjectsColumn'
import TimerColumn from '@/components/common/Home/TimerColumn'

function HomePage() {
  const [isAdd, setIsAdd] = React.useState(false)
  const [sideProject, setSideProject] = React.useState({
    name: '',
    description: '',
    time: '',
    categories: [],
  })
  const [currentProject, setCurrentProject] = React.useState({
    name: '',
    description: '',
    time: '',
    categories: [],
  })

  const addCurrentCategory = (categoryName) => {
    setCurrentProject((prevState) => ({
      ...prevState,
      _id: nanoid(),
      categories: [
        ...prevState.categories,
        { name: categoryName, id: nanoid() },
      ],
    }))
  }

  const addSideCategory = (categoryName) => {
    setSideProject((prevState) => ({
      ...prevState,
      _id: nanoid(),
      categories: [
        ...prevState.categories,
        { name: categoryName, id: nanoid() },
      ],
    }))
  }

  const handleSideChange = (target) => {
    setSideProject((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleCurrentChange = (target) => {
    setCurrentProject((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const debouncedSideChangeHandler = React.useCallback(
    debounce(handleSideChange, 200),
    [],
  )

  const debouncedCurrentChangeHandler = React.useCallback(
    debounce(handleCurrentChange, 200),
    [],
  )

  const handleClick = React.useCallback(() => {
    setIsAdd((prevIsAdd) => !prevIsAdd)
  }, [])

  return (
    <div className='flex justify-center mt-3 sm:min-h-[90vh] gap-3 max-w-[120rem] mx-auto px-3'>
      <ProjectsColumn onClick={handleClick} display='small' />
      {window?.innerWidth < 1200 ? (
			isAdd ? (
  <AddProjectColumn
    onClick={handleClick}
    onChange={debouncedSideChangeHandler}
    onEnter={addSideCategory}
    sideCategories={sideProject.categories}
    sideProject={sideProject}
  />
			) : (
  <TimerColumn
    time='00:00'
    onClick={handleClick}
    onChange={debouncedCurrentChangeHandler}
    onEnter={addCurrentCategory}
    currentCategories={currentProject.categories}
    currentProject={currentProject}
  />
			)
      ) : (
        <>
          <TimerColumn
            time='00:00'
            onChange={debouncedCurrentChangeHandler}
            onEnter={addCurrentCategory}
            currentCategories={currentProject.categories}
            currentProject={currentProject}
          />
          {isAdd && (
          <AddProjectColumn
            onClick={handleClick}
            onChange={debouncedSideChangeHandler}
            onEnter={addSideCategory}
            sideCategories={sideProject.categories}
            sideProject={sideProject}
          />
          )}
        </>
      )}
    </div>
  )
}

export default HomePage
