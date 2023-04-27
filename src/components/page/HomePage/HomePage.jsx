import React from 'react'

import AddProjectColumn from '@/components/common/Home/AddProjectColumn'
import ProjectsColumn from '@/components/common/Home/ProjectsColumn'
import TimerColumn from '@/components/common/Home/TimerColumn'
import Loader from '@/components/ui/Loader'

function HomePage() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [loaderValue, setLoaderValue] = React.useState(0)
  const [isAdd, setIsAdd] = React.useState(false)

  const handleClick = React.useCallback(() => {
    setIsAdd((prevIsAdd) => !prevIsAdd)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoaderValue((oldValue) => {
        const newValue = oldValue + 10

        if (newValue > 100) {
          setIsLoading(false)
          return () => clearInterval(interval)
        }

        return newValue
      })
    }, 100)
  }, [])

  return isLoading ? (
    <Loader value={loaderValue} />
  ) : (
    <div className='flex justify-center mt-3 sm:min-h-[92vh] gap-3 max-w-[120rem] mx-auto px-3'>
      <ProjectsColumn onClick={handleClick} display='small' />
      {window?.innerWidth < 1200 ? (
        isAdd ? (
          <AddProjectColumn onClick={handleClick} />
        ) : (
          <TimerColumn time='00:00' />
        )
      ) : (
        <>
          <TimerColumn time='00:00' />
          {isAdd && <AddProjectColumn onClick={handleClick} />}
        </>
      )}
    </div>
  )
}

export default HomePage
