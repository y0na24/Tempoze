import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'

function FormButton({ display }) {
  return (
    <button className={`${styles.formButton} ${display}`} type='submit'>
      Войти
    </button>
  )
}

FormButton.propTypes = {
  display: PropTypes.string.isRequired,
}

export default FormButton
