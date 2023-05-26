import PropTypes from 'prop-types'

import TextField from '@/components/ui/TextField'
import CategoryList from './CategoryList'

import { playBtn, acceptBtn } from '@/assets/assets'
import AddButton from '@/components/ui/Buttons/AddButton'
import AddTagButton from '@/components/ui/Buttons/AddTagButton'

function TimerColumn({ time }) {
  return (
    <div className='pt-16 sm:px-16 flex-col rounded-xl sm:bg-mainColor basis-[61.25rem]'>
      <div className='flex items-center gap-6 mb-12'>
        <p className='font-bold text-5xl sm:text-[4rem]'>{time}</p>
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
      <CategoryList>
        <AddTagButton />
      </CategoryList>
      <AddButton margin='ml-auto' image={acceptBtn} />
    </div>
  )
}

TimerColumn.propTypes = {
  time: PropTypes.string.isRequired,
}

export default TimerColumn
