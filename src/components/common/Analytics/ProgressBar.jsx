import PropTypes from 'prop-types'

function ProgressBar({ color, text, statNumber }) {
  const colorVariants = {
    gold: 'bg-gold',
    lime: 'bg-lime',
  }

  return (
    <div className='[&:not(:last-child)]:mb-3'>
      <p className='text-[15px] font-semibold leading-none'>
        {statNumber}
        %
        {text}
      </p>
      <div className='h-[7px] w-full bg-black inline-block rounded-lg relative -z-20'>
        <div
          style={{ width: `${statNumber}%` }}
          className={`${colorVariants[color]} h-full absolute bottom-0 left-0 -z-10 rounded-xl`}
        />
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  statNumber: '20',
  text: 'Текст',
  color: '',
}

ProgressBar.propTypes = {
  statNumber: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default ProgressBar
