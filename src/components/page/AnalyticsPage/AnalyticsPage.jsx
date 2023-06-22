/* eslint-disable react/no-array-index-key */

import ProgressBar from '@/components/common/Analytics/ProgressBar'
import Projects from '@/components/common/Analytics/Projects'
import StatSquare from '@/components/common/Analytics/StatSquare'

import {
	getLongestSession,
	getProjectsAmount,
	getTimeSum,
} from '@/store/projectsSlice'
import { useSelector } from 'react-redux'

function AnalyticsPage() {
	const timeSum = useSelector(getTimeSum())
	const projectsAmount = useSelector(getProjectsAmount())
	const longestSession = useSelector(getLongestSession())

	return (
		<div className='max-w-[111rem] mx-auto px-4'>
			<div className='flex flex-col lg:flex-row lg:justify-between mt-8 mb-8 md:mt-[4.5rem] md:mb-12'>
				<div className='flex gap-3 justify-center mb-5 lg:mb-0'>
					<StatSquare statNumber={timeSum} text='Часов потрачено' />
					<StatSquare statNumber={projectsAmount} text='Проектов завершено' />
					<StatSquare statNumber={longestSession} text='Самая долгая сессия' />
				</div>
				<div className='gap-3 flex-wrap justify-center hidden sm:flex'>
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
				</div>
				<div className='sm:hidden'>
					<ProgressBar statNumber='90' text='Эффективности' color='lime' />
					<ProgressBar statNumber='10' text='Пауз в работе' color='gold' />
				</div>
			</div>
			<div>
				<h2 className='mb-6 text-[2.5rem] font-bold hidden md:block'>
					Проекты
				</h2>
				<Projects />
			</div>
		</div>
	)
}

export default AnalyticsPage
