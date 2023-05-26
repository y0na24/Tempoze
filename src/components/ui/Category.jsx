import PropTypes from 'prop-types'

function Category({ bgColor, name }) {
  const colorVariants = {
    green: 'bg-[#4B9445]',
    red: 'bg-red',
    violet: 'bg-violet',
  }

  return (
    <li>
      <button
        className={`text-white ${colorVariants[bgColor]} px-6 py-2 text-xs rounded-[6.1875rem] inline-block`}
        type='button'
      >
        {name}
      </button>
    </li>
  )
}

Category.propTypes = {
  bgColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Category
