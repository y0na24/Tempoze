import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import SideProjectsColumn from '@/components/common/Home/SideProjectsColumn'
import ProjectsListColumn from '@/components/common/Home/ProjectsListColumn'
import CurrentProjectsColumn from '@/components/common/Home/CurrentProjectsColumn'

import { categoryColors } from '@/constants'

const initialState = {
  name: '',
  description: '',
  time: '',
  categories: [],
}

function HomePage() {
  const [isAdd, setIsAdd] = React.useState(false)
  const [sideProject, setSideProject] = React.useState(initialState)
  const [currentProject, setCurrentProject] = React.useState(initialState)

  const initiateSideState = () => {
    setSideProject(initialState)
  }

  const initiateCurrentState = () => {
    setCurrentProject(initialState)
  }

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

  const addSideCategory = (categoryName) => {
    setSideProject((prevState) => {
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

  const deleteSideCategory = (id) => {
    setSideProject((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((category) => category.id !== id),
    }))
  }

  const deleteCurrentCategory = (id) => {
    setCurrentProject((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((category) => category.id !== id),
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

  const handleClick = () => {
    setIsAdd((prevState) => !prevState)
  }

  return (
    <div className='flex justify-center mt-3 sm:min-h-[90vh] gap-3 max-w-[120rem] mx-auto px-3'>
      <ProjectsListColumn onClick={handleClick} display='small' />
      {window?.innerWidth < 1200 ? (
			  isAdd ? (
  <SideProjectsColumn
    onClick={handleClick}
    onChange={debouncedSideChangeHandler}
    onEnter={addSideCategory}
    onDelete={deleteSideCategory}
    sideCategories={sideProject.categories}
    sideProject={sideProject}
    onSubmit={initiateSideState}
  />
			  ) : (
  <CurrentProjectsColumn
    time='00:00'
    onChange={debouncedCurrentChangeHandler}
    onEnter={addCurrentCategory}
    onSubmit={initiateCurrentState}
    onDelete={deleteCurrentCategory}
    currentCategories={currentProject.categories}
    currentProject={currentProject}
  />
			  )
      ) : (
        <>
          <CurrentProjectsColumn
            time='00:00'
            onChange={debouncedCurrentChangeHandler}
            onEnter={addCurrentCategory}
            onSubmit={initiateCurrentState}
            onDelete={deleteCurrentCategory}
            currentCategories={currentProject.categories}
            currentProject={currentProject}
          />
          {isAdd && (
          <SideProjectsColumn
            onClick={handleClick}
            onChange={debouncedSideChangeHandler}
            onEnter={addSideCategory}
            onDelete={deleteSideCategory}
            onSubmit={initiateSideState}
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
