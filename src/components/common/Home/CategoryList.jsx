import React from 'react'
import PropTypes from 'prop-types'

import Category from '@/components/ui/Category'

function CategoryList({
  categories,
  onEnter,
  isVisible,
  changeVisibility,
  onDelete,
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
      <h3 className='text-base leading-[1.0625rem] text-white mb-3'>Теги</h3>

      <div className='flex'>
        <ul className='flex'>
          {categories
						&& categories.map((category) => (
  <Category
    key={category.id}
    id={category.id}
    color={category.color}
    name={category.name}
    onDelete={() => onDelete(category.id)}
  />
						))}
        </ul>
        {isVisible && (
        <input
          type='text'
          autoFocus
          className='bg-transparent w-[160px] outline-none border-b mr-8'
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
  categories: PropTypes.array,
  onEnter: PropTypes.func,
  isVisible: PropTypes.bool,
  changeVisibility: PropTypes.func,
  onDelete: PropTypes.func,
}

export default CategoryList
