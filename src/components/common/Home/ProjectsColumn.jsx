import PropTypes from 'prop-types'

import ProjectList from '@/components/ui/ProjectList'

function ProjectsColumn({ onClick, display }) {
  const displayStyles =		display === 'mobile' ? 'flex sm:hidden' : 'hidden sm:flex'

  return (
    <div className={`${displayStyles} flex-col p-6 rounded-xl sm:bg-mainColor mt-8 sm:mt-0`}>
      <div className='flex-1'>
        <ProjectList amount={1} title='Личные проекты' />
        <ProjectList amount={3} title='Командные проекты' />
      </div>
      <button
        type='button'
        className='bg-lightGreen transition duration-300 text-base font-semibold rounded-xl py-4 w-full hover:bg-lime'
        onClick={onClick}
      >
        Создать
      </button>
    </div>
  )
}

ProjectsColumn.propTypes = {
  onClick: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
}

export default ProjectsColumn
