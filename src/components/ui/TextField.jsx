import React from 'react'
import { styles } from './styles'

const TextField = ({ labelText, type, placeholder, name }) => {
	return (
		<div className='flex flex-col mb-9'>
			<label htmlFor={name} className={styles.label}>
				{labelText}
			</label>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				name={name}
				autoComplete='off'
			/>
		</div>
	)
}


export default TextField
