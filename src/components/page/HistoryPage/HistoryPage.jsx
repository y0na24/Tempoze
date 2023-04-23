import React from 'react'

import ProjectsColumn from '@/components/common/Home/ProjectsColumn'

function HistoryPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpenClick = () => {
    setIsOpen(true)
  }

  return (
    !isOpen && <ProjectsColumn display='mobile' onClick={handleOpenClick} />
  )
}

export default HistoryPage
