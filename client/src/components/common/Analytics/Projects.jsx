import React from 'react'
import PropTypes from 'prop-types'

import Project from './Project'

function Projects({ projects }) {
	return (
		<ul className='overflow-x-scroll md:overflow-x-auto'>
			{projects?.length > 0
				? projects.map(p => (
						<Project
							key={p._id}
							name={p.name}
							description={p.description}
							time={p.time}
							categories={p.categories}
							id={p.projectId}
						/>
				  ))
				: 'Проектов нет'}
		</ul>
	)
}

Projects.propTypes = {
	projects: PropTypes.array,
}

export default Projects
