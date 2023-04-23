import PropTypes from 'prop-types'

import CategoryItem from '@/components/ui/CategoryItem'
import ProjectItem from '../../ui/ProjectItem'

import categories from '@/data/categories'

import { projectSymbol, toolbarProfile } from '@/assets/assets'

import styles from './styles'

function ProjectHistory({ time }) {
  return (
    <div className={styles.projectHistoryContainer}>
      <ProjectItem projectName='Проект' image={projectSymbol} />
      <ProjectItem projectName='Username' image={toolbarProfile} />

      <p className='text-4 font-medium'>{time}</p>

      <ul className='flex items-center gap-3'>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            bgColor={category.bgColor}
          />
        ))}
      </ul>
    </div>
  )
}

ProjectHistory.defaultProps = {
  time: '20 часов',
}

ProjectHistory.propTypes = {
  time: PropTypes.string,
}

export default ProjectHistory
