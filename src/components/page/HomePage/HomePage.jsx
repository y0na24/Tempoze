import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'

import SideProjectsColumn from '@/components/common/Home/SideProjectsColumn'
import ProjectsListColumn from '@/components/common/Home/ProjectsListColumn'
import CurrentProjectsColumn from '@/components/common/Home/CurrentProjectsColumn'

const initialState = { name: '', description: '', time: '', categories: [] }

function HomePage() {
	const [isAdd, setIsAdd] = React.useState(false)
	const [sideProject, setSideProject] = React.useState(initialState)
	const [currentProject, setCurrentProject] = React.useState(initialState)

	const initiateSideState = () => {
		setSideProject(initialState)
	}

	const initiateCurrentState = () => {
		setCurrentProject(initialState)
	}

	const addCurrentCategory = categoryName => {
		setCurrentProject(prevState => ({
			...prevState,
			categories: [
				...prevState.categories,
				{ name: categoryName, id: nanoid() },
			],
		}))
	}

	const addSideCategory = categoryName => {
		setSideProject(prevState => ({
			...prevState,
			categories: [
				...prevState.categories,
				{ name: categoryName, id: nanoid() },
			],
		}))
	}

	const handleSideChange = target => {
		setSideProject(prevState => ({
			...prevState,
			[target.name]: target.value,
		}))
	}

	const handleCurrentChange = target => {
		setCurrentProject(prevState => ({
			...prevState,
			[target.name]: target.value,
		}))
	}

	const debouncedSideChangeHandler = React.useCallback(
		debounce(handleSideChange, 200),
		[]
	)

	const debouncedCurrentChangeHandler = React.useCallback(
		debounce(handleCurrentChange, 200),
		[]
	)

	const handleClick = () => {
		setIsAdd(prevState => !prevState)
	}

	return (
		<div className='flex justify-center mt-3 sm:min-h-[90vh] gap-3 max-w-[120rem] mx-auto px-3'>
			<ProjectsListColumn onClick={handleClick} display='small' />
			{window?.innerWidth < 1200 ? (
				isAdd ? (
					<SideProjectsColumn
						onClick={handleClick}
						onChange={debouncedSideChangeHandler}
						onEnter={addSideCategory}
						sideCategories={sideProject.categories}
						sideProject={sideProject}
						onSubmit={initiateSideState}
					/>
				) : (
					<CurrentProjectsColumn
						time='00:00'
						onClick={handleClick}
						onChange={debouncedCurrentChangeHandler}
						onEnter={addCurrentCategory}
						currentCategories={currentProject.categories}
						currentProject={currentProject}
						onSubmit={initiateCurrentState}
					/>
				)
			) : (
				<>
					<CurrentProjectsColumn
						time='00:00'
						onChange={debouncedCurrentChangeHandler}
						onEnter={addCurrentCategory}
						currentCategories={currentProject.categories}
						currentProject={currentProject}
						onSubmit={initiateCurrentState}
					/>
					{isAdd && (
						<SideProjectsColumn
							onClick={handleClick}
							onChange={debouncedSideChangeHandler}
							onEnter={addSideCategory}
							sideCategories={sideProject.categories}
							sideProject={sideProject}
							onSubmit={initiateSideState}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default HomePage
