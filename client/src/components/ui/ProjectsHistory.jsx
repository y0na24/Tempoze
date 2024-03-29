/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import ProjectItem from './ProjectItem'

import { getProjectsList } from '@/store/projectsSlice'

import { projectSymbol } from '@/assets/assets'

function ProjectsHistory({ title }) {
  const projects = useSelector(getProjectsList())

  return (
    <div className='mb-9'>
      <h3 className='text-xl font-semibold mb-4 text-center'>{title}</h3>
      <ul>
        {projects?.length > 0
          ? projects
            .slice(0, 10)
            .map((p) => (
              <ProjectItem
                key={p._id}
                projectName={p.name}
                description={p.description}
                image={projectSymbol}
              />
            ))
          : 'Проектов нет'}
      </ul>
    </div>
  )
}

ProjectsHistory.defaultProps = {
  title: 'Проекты',
}

ProjectsHistory.propTypes = {
  title: PropTypes.string,
}

export default ProjectsHistory
