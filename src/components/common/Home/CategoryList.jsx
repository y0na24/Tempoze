import CategoryItem from '@/components/ui/CategoryItem'

import categories from '@/data/categories'

import { addNewCategory } from '@/assets/assets'

function CategoryList() {
  return (
    <div>
      <h3 className='text-base leading-[1.0625rem] text-white mb-3'>Теги</h3>
      <ul className='flex gap-3'>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            bgColor={category.bgColor}
          />
        ))}
        <button
          type='button'
          className='flex items-center justify-center bg-[#3F3E43] p-2 rounded-full'
        >
          <img src={addNewCategory} alt='Добавить категорию' />
        </button>
      </ul>
    </div>
  )
}

export default CategoryList
