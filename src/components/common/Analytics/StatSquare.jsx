import PropTypes from 'prop-types'

import styles from './styles'

function StatSquare({
  statNumber, text, isProgressBar, color,
}) {
  const colorVariants = {
    gold: 'bg-gold',
    lime: 'bg-lime',
  }

  return (
    <div className={styles.statSquareContainer}>
      {isProgressBar && (
      <div
        style={{ height: `${statNumber}%` }}
        className={`${colorVariants[color]} absolute bottom-0 left-0 right-0 -z-10 rounded-b-xl`}
      />
      )}

      <div className='text-2xl md:text-5xl font-semibold mb-2 md:mb-[0.625rem]'>
        {isProgressBar ? `${statNumber}%` : statNumber}
      </div>
      <p className='text-xs md:text-base'>{text}</p>
    </div>
  )
}

StatSquare.defaultProps = {
  isProgressBar: false,
  color: null,
  statNumber: null,
}

StatSquare.propTypes = {
  statNumber: PropTypes.string,
  text: PropTypes.string.isRequired,
  isProgressBar: PropTypes.bool,
  color: PropTypes.string,
}

export default StatSquare
