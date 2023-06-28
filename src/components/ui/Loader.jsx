import PropTypes from 'prop-types'

import { loaderLogo } from '@/assets/assets'

function Loader({ value }) {
  return (
    <div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
      <img className='mb-4' src={loaderLogo} alt='Логотип' />
      <div className='w-413px h-1 bg-white rounded-[7px]'>
        <div style={{ width: `${value}%` }} className='bg-lightGreen h-1' />
      </div>
    </div>
  )
}

Loader.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Loader
