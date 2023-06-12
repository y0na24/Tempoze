import PropTypes from 'prop-types'

import { projectSymbol, toolbarProfile } from '@/assets/assets'

import styles from './styles'
import CategoryList from '../Home/CategoryList'

function Project({ name, description, time }) {
	return (
		<li className={styles.projectHistoryContainer}>
			<div className='flex items-center'>
				<img
					className='mr-[0.9063rem]'
					src={projectSymbol}
					alt='Проект'
					width={15}
					height={15}
				/>
				<p className='text-[1.125rem]'>{name}</p>
			</div>
			<div className='flex items-center'>
				<img
					className='mr-[0.9063rem]'
					src={toolbarProfile}
					alt='Проект'
					width={15}
					height={15}
				/>
				<p className='text-[1.125rem]'>{description}</p>
			</div>
			<p className='text-4 font-medium'>{time}</p>
			<CategoryList />
		</li>
	)
}

Project.defaultProps = {
	time: '20 часов',
}

Project.propTypes = {
	time: PropTypes.string,
}

export default Project
