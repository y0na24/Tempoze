/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useSelector } from 'react-redux'
import { getProjectsList } from '@/store/projectsSlice'

import Project from './Project'

function Projects() {
  const projects = useSelector(getProjectsList())

  return (
    <ul className='overflow-x-scroll md:overflow-x-auto'>
      {projects.length > 0
			? projects.map((p) => (
  <Project
    key={p._id}
    name={p.name}
    description={p.description}
    time={p.time}
    categories={p.categories}
  />
			))
			: 'Проектов нет'}
    </ul>
  )
}

export default Projects
