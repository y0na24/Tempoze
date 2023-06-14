import React from 'react'
import PropTypes from 'prop-types'

import ProjectCategory from './ProjectCategory'

import { projectSymbol, projectDescr } from '@/assets/assets'

import styles from './styles'
import Modal from '@/components/ui/Modal'
import useModal from '@/hooks/useModal'

function Project({
  name, description, time, categories,
}) {
  const { closeModal, openModal, showModal } = useModal()

  return (
    <li className={styles.projectHistoryContainer}>
      <div className='flex items-center'>
        <img
          className='mr-[0.9063rem]'
          src={projectSymbol}
          alt='Проект'
          width={16.8}
          height={16.8}
        />
        <p className='text-[1.125rem]'>{name}</p>
      </div>
      <div className='flex items-center cursor-pointer' onClick={openModal}>
        <img
          className='mr-[0.9063rem]'
          src={projectDescr}
          alt='Проект'
          width={16.8}
          height={16.8}
        />
        <p className='text-[1.125rem]'>Описание проекта</p>
      </div>
      <p className='text-4 font-medium'>{time}</p>
      <ProjectCategory categories={categories} />
      <Modal
        isVisible={showModal}
        description={description}
        onClose={closeModal}
      />
    </li>
  )
}

Project.defaultProps = {
  time: '20 часов',
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  categories: PropTypes.array,
}
export default Project
