import { uniqueId } from 'lodash'

import ProgressBar from '@/components/common/Analytics/ProgressBar'
import ProjectHistory from '@/components/common/Analytics/ProjectHistory'
import StatSquare from '@/components/common/Analytics/StatSquare'

function AnalyticsPage() {
	return (
		<div className='max-w-[111rem] mx-auto px-4'>
			<div className='flex flex-col lg:flex-row lg:justify-between mt-8 mb-8 md:mt-[4.5rem] md:mb-12'>
				<div className='flex gap-3 justify-center mb-5 lg:mb-0'>
					<StatSquare statNumber='72' text='Часов потрачено' />
					<StatSquare statNumber='14' text='Проектов завершено' />
					<StatSquare statNumber='2.6ч' text='Самая долгая сессия' />
				</div>
				<div className='gap-3 flex-wrap justify-center hidden sm:flex'>
					<StatSquare
						statNumber='10'
						text='Пауз на работе'
						isProgressBar
						color='gold'
					/>
					<StatSquare
						statNumber='90'
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
				<div className='overflow-x-scroll md:overflow-x-auto'>
					{Array.from({ length: 7 }, () => 0).map(() => (
						<ProjectHistory key={uniqueId()} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AnalyticsPage
