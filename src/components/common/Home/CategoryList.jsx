import React from 'react'
import PropTypes from 'prop-types'

import Category from '@/components/ui/Category'

function CategoryList({
  categories,
  onEnter,
  isVisible,
  changeVisibility,
  children,
}) {
  const [inputValue, setInputValue] = React.useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEnter(inputValue)
      changeVisibility()
      setInputValue('')
    }
  }
  return (
    <div>
      {children && (
      <h3 className='text-base leading-[1.0625rem] text-white mb-3'>Теги</h3>
      )}
      <div className='flex'>
        <ul className={`flex ${children ? 'mb-3' : null}`}>
          {categories
						&& categories.map((category) => (
  <Category
    key={category.id}
    id={category.id}
    name={category.name}
  />
						))}
        </ul>
        {isVisible && (
        <input
          type='text'
          className='bg-transparent outline-none border-b mr-8'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Введите категорию'
          onKeyDown={handleKeyDown}
        />
        )}
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
  categories: PropTypes.array.isRequired,
  onEnter: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  changeVisibility: PropTypes.func.isRequired,
}

export default CategoryList
