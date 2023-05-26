import PropTypes from 'prop-types'

import Category from '@/components/ui/Category'

import categories from '@/data/categories'

function CategoryList({ children }) {
  return (
    <div>
      {children && (
      <h3 className='text-base leading-[1.0625rem] text-white mb-3'>Теги</h3>
      )}
      <div className='flex gap-3'>
        <ul className={`flex gap-3 ${children ? 'mb-3' : null}`}>
          {categories.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              bgColor={category.bgColor}
            />
          ))}
        </ul>
        {children}
      </div>
    </div>
  )
}

CategoryList.defaultProps = {
  children: null,
}

CategoryList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default CategoryList
