/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'

import ProjectItem from './ProjectItem'

import { projectSymbol } from '@/assets/assets'

function ProjectsHistory({ title, amount }) {
  return (
    <div className='mb-9'>
      <h3 className='text-xl font-semibold mb-4 text-center'>{title}</h3>
      <ul>
        {Array.from({ length: amount }, () => 0).map((_, i) => (
          <ProjectItem key={i} projectName='Проект' image={projectSymbol} />
        ))}
      </ul>
    </div>
  )
}

ProjectsHistory.defaultProps = {
  title: 'Проекты',
  amount: 2,
}

ProjectsHistory.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}

export default ProjectsHistory
