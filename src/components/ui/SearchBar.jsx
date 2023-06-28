import React from 'react'
import PropTypes from 'prop-types'

function SearchBar({ onChange, value }) {
  const handleChange = ({ target }) => {
    onChange(target.value)
  }

  return (
    <input
      type='text'
      value={value}
      className='text-base text-white bg-transparent border border-[#959497] py-3 px-4 rounded-lg outline-transparent placeholder:text-[#959497]'
      placeholder='Поиск по тегам'
      onChange={handleChange}
    />
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
}

export default SearchBar
