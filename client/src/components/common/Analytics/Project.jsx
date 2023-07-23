import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import ProjectCategory from './ProjectCategory'
import Modal from '@/components/ui/Modal'

import useModal from '@/hooks/useModal'

import pluralizeHours from '@/utils/pluralizeHours'

import styles from './styles'

import { projectSymbol, projectDescr, cross } from '@/assets/assets'
import { removeProject } from '@/store/projectsSlice'

function Project({ name, description, time, categories, id }) {
	const dispatch = useDispatch()
	const { closeModal, openModal, showModal } = useModal()

	const handleProjectDelete = projectId => {
		dispatch(removeProject(projectId))
	}

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
			<p className='text-4 font-medium text-center'>{pluralizeHours(time)}</p>
			<ProjectCategory categories={categories} />
			<button
				onClick={() => handleProjectDelete(id)}
				type='button'
				className='!w-5 absolute inline text-end top-0.5 right-1.5'
			>
				<img className='inline' width={16} height={16} src={cross} alt='' />
			</button>
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
