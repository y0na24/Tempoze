import PropTypes from 'prop-types'

import ProjectList from '@/components/ui/ProjectList'

function ProjectsColumn({ onClick }) {
  return (
    <div className='flex flex-col p-6 rounded-xl bg-mainColor'>
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
}

export default ProjectsColumn
