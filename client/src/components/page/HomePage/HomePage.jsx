import React from 'react'

import SideProjectsColumn from '@/components/common/Home/SideProjectsColumn'
import ProjectsListColumn from '@/components/common/Home/ProjectsListColumn'
import CurrentProjectsColumn from '@/components/common/Home/CurrentProjectsColumn'

function HomePage() {
  const [isAdd, setIsAdd] = React.useState(false)

  const handleClick = () => {
    setIsAdd((prevState) => !prevState)
  }

  return (
    <div className='flex justify-center mt-3 sm:min-h-[90vh] gap-3 max-w-[120rem] mx-auto px-3'>
      <ProjectsListColumn onClick={handleClick} display='small' />
      {window?.innerWidth < 1200 ? (
			  isAdd ? (
  <SideProjectsColumn onClick={handleClick} />
			  ) : (
  <CurrentProjectsColumn />
			  )
      ) : (
        <>
          <CurrentProjectsColumn />
          {isAdd && <SideProjectsColumn onClick={handleClick} />}
        </>
      )}
    </div>
  )
}

export default HomePage
