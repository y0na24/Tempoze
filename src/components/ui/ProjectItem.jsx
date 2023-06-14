import React from 'react'
import PropTypes from 'prop-types'

import Modal from './Modal'
import useModal from '@/hooks/useModal'

function ProjectItem({ projectName, description, image }) {
  const { closeModal, openModal, showModal } = useModal()

  return (
    <li className='flex items-center cursor-pointer' onClick={openModal}>
      <img
        className='mr-[0.9063rem]'
        src={image}
        alt='Проект'
        width={15}
        height={15}
      />
      <p className='text-sm'>{projectName}</p>
      <Modal
        isVisible={showModal}
        description={description}
        onClose={closeModal}
      />
    </li>
  )
}

ProjectItem.defaultProps = {
  projectName: 'Проект',
}

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default ProjectItem
