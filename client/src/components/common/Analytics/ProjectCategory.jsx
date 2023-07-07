import React from 'react'
import PropTypes from 'prop-types'

import Category from '@/components/ui/Category'

function ProjectCategory({ categories }) {
  return (
    <ul className='flex justify-end'>
      {categories
				&& categories.map((c) => (
  <Category key={c.id} color={c.color} name={c.name} />
				))}
    </ul>
  )
}

ProjectCategory.propTypes = {
  categories: PropTypes.array,
}

export default ProjectCategory
