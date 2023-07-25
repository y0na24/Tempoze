import React from 'react'
import { useSelector } from 'react-redux'

import ProgressBar from '@/components/common/Analytics/ProgressBar'
import Projects from '@/components/common/Analytics/Projects'
import StatSquare from '@/components/common/Analytics/StatSquare'

import {
	getLongestSession,
	getProjectsAmount,
	getProjectsList,
	getTimeSum,
} from '@/store/projectsSlice'
import Pagination from '@/components/common/Pagination'
import SearchBar from '@/components/ui/SearchBar'

function AnalyticsPage() {
	const timeSum = useSelector(getTimeSum())
	const projectsAmount = useSelector(getProjectsAmount())
	const longestSession = useSelector(getLongestSession())
	const projects = useSelector(getProjectsList())

	const [searchValue, setSearchValue] = React.useState('')
	const [currentPage, setCurrentPage] = React.useState(1)
	const [projectsPerPage] = React.useState(8)

	const lastProjectIndex = currentPage * projectsPerPage
	const firstProjectIndex = lastProjectIndex - projectsPerPage
	const currentProjects = projects?.slice(firstProjectIndex, lastProjectIndex)

	const handleChange = value => {
		setSearchValue(value)
	}

	const searchedProjects = currentProjects?.filter(project => {
		const { categories } = project
		console.log(categories)

		for (const category of categories) {
			if (category.name.toLowerCase().includes(searchValue.toLowerCase())) {
				return category
			}
		}
	})

	React.useEffect(() => {
		if (searchedProjects < 9) {
			setCurrentPage(1)
		}
	}, [searchedProjects])

	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<div className='max-w-[111rem] mx-auto px-4'>
			<div className='flex flex-col lg:flex-row lg:justify-between mt-8 mb-8 md:mt-[4.5rem] md:mb-12'>
				<div className='flex gap-3 justify-center mb-5 lg:mb-0'>
					<StatSquare statNumber={timeSum} text='Часов потрачено' />
					<StatSquare statNumber={projectsAmount} text='Проектов завершено' />
					<StatSquare statNumber={longestSession} text='Самая долгая сессия' />
				</div>
				{/* <div className='gap-3 flex-wrap justify-center hidden sm:flex'>
          <StatSquare
            statNumber={10}
            text='Пауз на работе'
            isProgressBar
            color='gold'
          />
          <StatSquare
            statNumber={90}
            text='Эффективности'
            isProgressBar
            color='lime'
          />
        </div> */}
				{/* <div className='sm:hidden'>
          <ProgressBar statNumber='90' text='Эффективности' color='lime' />
          <ProgressBar statNumber='10' text='Пауз в работе' color='gold' />
        </div> */}
			</div>
			<div className='mb-5'>
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-[2.5rem] font-bold hidden md:block'>Проекты</h2>
					<SearchBar onChange={handleChange} value={searchValue} />
				</div>
				<Projects projects={searchedProjects} />
			</div>
			{projects?.length > 8 && (
				<Pagination
					projectsPerPage={projectsPerPage}
					totalProjects={projectsAmount}
					currentPage={currentPage}
					paginate={paginate}
				/>
			)}
		</div>
	)
}

export default AnalyticsPage
