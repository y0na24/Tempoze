import PropTypes from 'prop-types'

import { cancelBtn } from '@/assets/assets'

function ExitButton({ onClick }) {
  return (
    <button
      type='button'
      className='bg-red rounded-full w-12 h-12 flex justify-center items-center hover:bg- transition duration-300'
      onClick={onClick}
    >
      <img src={cancelBtn} alt='Отменить' />
    </button>
  )
}

ExitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ExitButton
