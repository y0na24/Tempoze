import React from 'react'

const useModal = () => {
  const [showModal, setShowModal] = React.useState(false)

  const closeModal = (e) => {
    e.stopPropagation()
    setShowModal(false)
  }

  const openModal = (e) => {
    e.stopPropagation()
    setShowModal(true)
  }

  return { closeModal, openModal, showModal }
}

export default useModal
