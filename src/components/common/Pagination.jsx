import React from 'react'
import PropTypes from 'prop-types'

function Pagination({
  projectsPerPage, totalProjects, paginate, currentPage,
}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className='flex items-center gap-2'>
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            className={`bg-mainColor ${
						  number === currentPage && 'text-lightGreen'
            } transition-all hover:opacity-70 w-9 h-9 p-5 rounded-xl flex items-center justify-center cursor-pointer`}
            key={number}
          >
            <a href='#'>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  projectsPerPage: PropTypes.number,
  totalProjects: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
}

export default Pagination
