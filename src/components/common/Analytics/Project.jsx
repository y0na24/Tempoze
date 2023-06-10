import PropTypes from 'prop-types'

import ProjectItem from '../../ui/ProjectItem'

import { projectSymbol, toolbarProfile } from '@/assets/assets'

import styles from './styles'
import CategoryList from '../Home/CategoryList'

function Project({ time }) {
  return (
    <li className={styles.projectHistoryContainer}>
      <ProjectItem projectName='Проект' image={projectSymbol} />
      <ProjectItem projectName='Описание' image={toolbarProfile} />
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
