import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import ProjectList from '@/components/ui/ProjectList'
import CreateButton from '@/components/ui/Buttons/CreateButton'
import AddButton from '@/components/ui/Buttons/AddButton'

import { addNewProject } from '@/assets/assets'

function ProjectsColumn({ onClick, className }) {
  const currentUrl = useLocation().pathname

  const displayStyles =		className === 'mobile' ? 'flex sm:hidden' : 'hidden sm:flex'

  return (
    <div
      className={`${displayStyles} flex-col p-6 rounded-xl sm:bg-mainColor mt-8 sm:mt-0`}
    >
      <div className='flex-1'>
        <ProjectList amount={1} title='Личные проекты' />
        <ProjectList amount={3} title='Командные проекты' />
      </div>
      {currentUrl === '/history' ? (
        <AddButton onClick={onClick} margin='ml-auto' image={addNewProject} />
      ) : (
        <CreateButton onClick={onClick} />
      )}
    </div>
  )
}

ProjectsColumn.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default ProjectsColumn
