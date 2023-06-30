import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'
import AddButton from '@/components/ui/Buttons/AddButton'
import ExitButton from '@/components/ui/Buttons/ExitButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

import { addNewProject } from '@/store/projectsSlice'

import { categoryColors } from '@/constants'

import { acceptBtn } from '@/assets/assets'
import { toast } from 'react-toastify'

const initialState = {
	name: '',
	description: '',
	time: '',
	categories: [],
}

function SideProjectsColumn({ onClick }) {
	const dispatch = useDispatch()

	const [sideProject, setSideProject] = React.useState(initialState)
	const [isInputVisible, setIsVisible] = React.useState(false)

	const initiateSideState = () => {
		setSideProject(initialState)
	}

	const addSideCategory = categoryName => {
		setSideProject(prevState => {
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

	const deleteSideCategory = id => {
		setSideProject(prevState => ({
			...prevState,
			categories: prevState.categories.filter(category => category.id !== id),
		}))
	}

	const handleSideChange = target => {
		setSideProject(prevState => ({
			...prevState,
			[target.name]: target.value,
		}))
	}

	const debouncedSideChangeHandler = React.useCallback(
		debounce(handleSideChange, 200),
		[]
	)

	const handleInputVisibility = () => {
		setIsVisible(prev => !prev)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (!sideProject.categories.length)
			return toast.error('Создайте тэг для проекта!', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			})

		e.target.reset()

		const project = {
			...sideProject,
			time: sideProject.time,
			_id: nanoid(),
		}
		dispatch(addNewProject(project))
		initiateSideState()
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
					onChange={debouncedSideChangeHandler}
				/>
				<TextField
					labelText='Добавьте описание'
					placeholder='Введите описание'
					name='description'
					type='text'
					onChange={debouncedSideChangeHandler}
				/>
				<TextField
					labelText='Затраченое время в часах'
					placeholder='Введите время'
					name='time'
					type='text'
					onChange={debouncedSideChangeHandler}
				/>
				<CategoryList
					categories={sideProject.categories}
					onEnter={addSideCategory}
					onDelete={deleteSideCategory}
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
}

export default SideProjectsColumn
