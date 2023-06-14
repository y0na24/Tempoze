import PropTypes from 'prop-types'

function Category({ name, color, onDelete }) {
  return (
    <li
      className={`text-white ${color}  mr-3 px-6 py-2 text-xs rounded-[6.1875rem] inline-block`}
      onClick={onDelete}
    >
      {name}
    </li>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}

export default Category
