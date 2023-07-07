import { tempozeLogoMobile, tempozeTitleWhite } from '@/assets/assets'

function LoginHeader() {
  return (
    <div className='flex gap-[0.625rem] ml-[1.5625rem] mt-[0.9375rem]'>
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
  )
}

export default LoginHeader
