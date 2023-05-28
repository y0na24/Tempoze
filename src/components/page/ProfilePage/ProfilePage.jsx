import React from 'react'

import UserCard from '@/components/common/Profile/UserCard'
import AddButton from '@/components/ui/Buttons/AddButton'
import TextField from '@/components/ui/TextField'

import CreateButton from '@/components/ui/Buttons/CreateButton'

import { acceptBtn, profileHeader } from '@/assets/assets'

function ProfilePage() {
  return (
    <>
      <img
        className='rounded-2xl m-auto mt-3 -z-10 hidden xl:block'
        src={profileHeader}
        alt='Обои'
      />
      <div className='px-4 relative mt-4 xl:mt-[-70px] z-10 m-auto max-w-[40.625rem]'>
        <UserCard userName='username' birthDate='01.01.1990' />
        <TextField
          labelText='Имя пользователя'
          type='text'
          placeholder='Логин'
          name='username'
        />
        <TextField
          labelText='Email'
          type='email'
          placeholder='test@mail.com'
          name='email'
        />
        <TextField
          labelText='Новый пароль'
          type='password'
          placeholder='***'
          name='password'
        />
        <TextField
          labelText='Повторить пароль'
          type='password'
          placeholder='***'
          name='acceptPassword'
        />
        <div className='flex justify-between items-center'>
          <a href='/'>Отменить</a>
          <AddButton image={acceptBtn} margin='sm:hidden' />
          <CreateButton width='max-w-[12.3125rem]' />
        </div>
      </div>
    </>
  )
}

export default ProfilePage
