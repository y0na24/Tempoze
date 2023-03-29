import React from 'react'
import ToolBar from '@/components/layout/ToolBar'
import Form from '@/components/common/Form/Form'
import { tempozeLogoMobile } from '@/assets/assets'
import { tempozeTitleWhite } from '@/assets/assets'

const LoginPage = () => {
  return (
    <div className='flex flex-col h-screen px-5 pt-[1.875rem]'>
				<div className='flex gap-[0.625rem] pb-[8.4375rem]'>
					<img
						loading='lazy'
						src={tempozeLogoMobile}
						alt='Логотип'
						width='40'
						height='40'
					/>
					<img
						loading='lazy'
						src={tempozeTitleWhite}
						alt="Название приложения - 'Tempoze'"
						width='132'
						height='15'
					/>
				</div>
				<Form />
			<ToolBar />
		</div>
  )
}

export default LoginPage