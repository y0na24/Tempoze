import PropTypes from 'prop-types'

import styles from './styles'

function TextField({
  labelText, type, placeholder, name,
}) {
  return (
    <div className='flex flex-col mb-9'>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      {name === 'description' ? (
        <textarea
          placeholder={placeholder}
          name={name}
          className={`${styles.input} resize-none h-[168px]`}
        />
      ) : (
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          name={name}
          autoComplete='off'
        />
      )}
    </div>
  )
}

TextField.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextField
