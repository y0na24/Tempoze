import PropTypes from 'prop-types'

function ProjectItem({ projectName, image }) {
  return (
    <div className='flex items-center'>
      <img
        className='mr-[0.9063rem]'
        src={image}
        alt='Проект'
        width={15}
        height={15}
      />
      <p className='text-[1.125rem]'>{projectName}</p>
    </div>
  )
}

ProjectItem.defaultProps = {
  projectName: 'Проект',
}

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default ProjectItem
