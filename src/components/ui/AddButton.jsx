import PropTypes from 'prop-types'

import { acceptBtn } from '@/assets/assets'

function AddButton({ onClick, margin }) {
  return (
    <button
      type='button'
      className={`bg-lightGreen ${margin} rounded-full w-16 h-16 flex justify-center items-center hover:bg-lime transition duration-300`}
      onClick={onClick}
    >
      <img src={acceptBtn} alt='Добавить' />
    </button>
  )
}

AddButton.defaultProps = {
  onClick: null,
  margin: 'm-0',
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  margin: PropTypes.string,
}

export default AddButton
