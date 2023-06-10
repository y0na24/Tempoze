import PropTypes from 'prop-types'

function Category({ name }) {
  return (
    <li
      className='text-white bg-[#4B9445] mr-3 px-6 py-2 text-xs rounded-[6.1875rem] inline-block'
    >
      {name}
    </li>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Category
