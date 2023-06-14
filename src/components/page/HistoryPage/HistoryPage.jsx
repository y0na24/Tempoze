import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import ProjectsListColumn from '@/components/common/Home/ProjectsListColumn'
import SideProjectsColumn from '@/components/common/Home/SideProjectsColumn'

const initialState = {
  name: '', description: '', time: '', categories: [],
}

function HistoryPage() {
  const [isAdd, setIsAdd] = React.useState(false)
  const [sideProject, setSideProject] = React.useState(initialState)

  const initiateSideState = () => {
    setSideProject(initialState)
  }

  const addSideCategory = (categoryName) => {
    setSideProject((prevState) => ({
      ...prevState,
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

  const handleClick = () => {
    setIsAdd((prevState) => !prevState)
  }

  const debouncedSideChangeHandler = React.useCallback(
    debounce(handleSideChange, 200),
    [],
  )

  return isAdd ? (
    <SideProjectsColumn
      onClick={handleClick}
      onChange={debouncedSideChangeHandler}
      onEnter={addSideCategory}
      sideCategories={sideProject.categories}
      sideProject={sideProject}
      onSubmit={initiateSideState}
    />
  ) : (
    <ProjectsListColumn display='mobile' onClick={handleClick} />
  )
}

export default HistoryPage
