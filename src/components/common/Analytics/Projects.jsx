/* eslint-disable react/no-array-index-key */
import React from 'react'

import Project from './Project'

function Projects() {
  return (
    <ul className='overflow-x-scroll md:overflow-x-auto'>
      {Array.from({ length: 1 }, () => 0).map((_, i) => (
        <Project key={i} />
      ))}
    </ul>
  )
}

export default Projects
