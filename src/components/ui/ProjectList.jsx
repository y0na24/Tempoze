import React from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'

import ProjectItem from './ProjectItem'

import { projectSymbol } from '@/assets/assets'

function ProjectList({ title, amount }) {
  return (
    <div className='mb-9'>
      <h3 className='text-xl font-semibold mb-4'>{title}</h3>
      <ul>
        {Array.from({ length: amount }, () => 0).map(() => (
          <ProjectItem
            key={uniqueId()}
            projectName='Проект'
            image={projectSymbol}
          />
        ))}
      </ul>
    </div>
  )
}

ProjectList.defaultProps = {
  title: 'Проекты',
  amount: 2,
}

ProjectList.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}

export default ProjectList
