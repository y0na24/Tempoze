import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import AddButton from '@/components/ui/Buttons/AddButton'
import ExitButton from '@/components/ui/Buttons/ExitButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { addNewProject } from '@/store/projectsSlice'

import { acceptBtn } from '@/assets/assets'

function SideProjectsColumn({
	onClick,
	onChange,
	sideProject,
	sideCategories,
	onEnter,
	onSubmit,
}) {
	const dispatch = useDispatch()
	const [isInputVisible, setIsVisible] = React.useState(false)

	const handleInputVisibility = () => {
		setIsVisible(prev => !prev)
	}

	const handleSubmit = e => {
		e.preventDefault()
		e.target.reset()
		const project = { ...sideProject, _id: nanoid() }
		dispatch(addNewProject(project))
		onSubmit()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col p-6 rounded-xl sm:bg-mainColor sm:basis-[592px]'
		>
			<h2 className='font-bold text-[2.5rem] mb-4 sm:mb-[3.3125rem]'>
				Создать проект
			</h2>
			<div className='flex-1'>
				<TextField
					labelText='Название проекта'
					placeholder='Введите название'
					name='name'
					type='text'
					onChange={onChange}
				/>
				<TextField
					labelText='Добавьте описание'
					placeholder='Введите описание'
					name='description'
					type='text'
					onChange={onChange}
				/>
				<TextField
					labelText='Затраченое время в часах'
					placeholder='Введите время'
					name='time'
					type='text'
					onChange={onChange}
				/>
				<CategoryList
					categories={sideCategories}
					onEnter={onEnter}
					isVisible={isInputVisible}
					changeVisibility={setIsVisible}
				>
					<AddTagButton onClick={handleInputVisibility} />
				</CategoryList>
			</div>
			<div className='flex justify-end items-center gap-3 mt-6'>
				<ExitButton onClick={onClick} />
				<AddButton image={acceptBtn} />
			</div>
		</form>
	)
}

SideProjectsColumn.propTypes = {
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	sideProject: PropTypes.object,
	sideCategories: PropTypes.array,
	onEnter: PropTypes.func,
	onSubmit: PropTypes.func,
}

export default SideProjectsColumn
