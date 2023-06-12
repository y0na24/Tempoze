import PropTypes from 'prop-types'

import styles from './styles'

function TextField({
  labelText,
  type,
  placeholder,
  name,
  error,
  register,
  onChange,
}) {
  const toValidate = register ? { ...register(name) } : null

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className='flex flex-col mb-9'>
      <legend htmlFor={name} className={styles.label}>
        {labelText}
      </legend>
      {name === 'description' ? (
        <>
          <textarea
            placeholder={placeholder}
            name={name}
            className={`${styles.input} resize-none h-[168px]`}
            required
            onChange={onChange ? handleChange : null}
            {...toValidate}
          />
          <p className='text-red'>{error}</p>
        </>
      ) : (
        <>
          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            autoComplete='off'
            required
            onChange={onChange ? handleChange : null}
            {...toValidate}
          />
          <p className='text-rose-700'>{error}</p>
        </>
      )}
    </div>
  )
}

TextField.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  register: PropTypes.func,
  error: PropTypes.string,
}

export default TextField
