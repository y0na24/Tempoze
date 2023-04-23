import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import { playBtn, acceptBtn } from '@/assets/assets'
import AddButton from '@/components/ui/Buttons/AddButton'

function TimerColumn() {
  return (
    <div className='pt-16 sm:px-16 flex-col rounded-xl sm:bg-mainColor basis-[980px]'>
      <div className='flex items-center gap-6 mb-12'>
        <p className='font-bold text-5xl sm:text-[4rem]'>00:00</p>
        <button type='button'>
          <img src={playBtn} alt='Старт' width={53} height={53} />
        </button>
      </div>
      <TextField
        labelText='Название проекта'
        placeholder='Введите название'
        name='projectName'
        type='text'
      />
      <TextField
        labelText='Добавьте описание'
        placeholder='Введите описание'
        name='description'
        type='text'
      />
      <CategoryList />
      <AddButton margin='ml-auto' image={acceptBtn} />
    </div>
  )
}

export default TimerColumn
