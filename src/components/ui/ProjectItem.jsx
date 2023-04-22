import PropTypes from 'prop-types'
import React from 'react'

function ProjectItem({ projectName, image }) {
  return (
    <li className='flex items-center'>
      <img
        className='mr-[0.9063rem]'
        src={image}
        alt='Проект'
        width={15}
        height={15}
      />
      <p className='text-[1.125rem]'>{projectName}</p>
    </li>
  )
}

ProjectItem.defaultProps = {
  projectName: 'Проект',
}

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default ProjectItem
