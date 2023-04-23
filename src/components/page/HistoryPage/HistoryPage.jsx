import React from 'react'

import ProjectsColumn from '@/components/common/Home/ProjectsColumn'
import AddProjectColumn from '@/components/common/Home/AddProjectColumn'

function HistoryPage() {
	const [isAdd, setIsAdd] = React.useState(false)

	const handleClick = () => {
		setIsAdd(!isAdd)
	}

	return isAdd ? (
		<AddProjectColumn onClick={handleClick} />
	) : (
		<ProjectsColumn display='mobile' onClick={handleClick} />
	)
}

export default HistoryPage
