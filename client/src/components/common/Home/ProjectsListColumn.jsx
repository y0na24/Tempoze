import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import ProjectsHistory from '@/components/ui/ProjectsHistory'
import CreateButton from '@/components/ui/Buttons/CreateButton'
import AddButton from '@/components/ui/Buttons/AddButton'

import { addNewProject } from '@/assets/assets'

function ProjectsListColumn({ onClick, display }) {
	const currentUrl = useLocation().pathname
	const isHistoryPage = currentUrl === '/history'

	const displayStyles =
		display === 'mobile' ? 'flex sm:hidden' : 'hidden sm:flex'

	return (
		<div
			className={`${displayStyles} ${isHistoryPage && 'h-[60vh]'}  flex-col p-6 rounded-xl sm:bg-mainColor mt-8 sm:mt-0`}
		>
			<div className='flex-1'>
				<ProjectsHistory title='Список проектов' />
			</div>

			{isHistoryPage ? (
				<AddButton onClick={onClick} margin='ml-auto' image={addNewProject} />
			) : (
				<CreateButton onClick={onClick} />
			)}
		</div>
	)
}

ProjectsListColumn.propTypes = {
	onClick: PropTypes.func.isRequired,
	display: PropTypes.string.isRequired,
}

export default ProjectsListColumn
