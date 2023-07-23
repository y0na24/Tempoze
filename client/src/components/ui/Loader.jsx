import { Bars } from 'react-loader-spinner'

function Loader() {
	return (
		<div className='h-screen flex items-center justify-center'>
			<Bars
				height='80'
				width='80'
				color='#34AC80'
				ariaLabel='bars-loading'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</div>
	)
}

export default Loader
