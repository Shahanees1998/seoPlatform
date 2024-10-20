'use client'
import CreateUser from 'components/Statistics/createUser'
import React, { useState } from 'react'

const AddUsert = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = (): any => {
    setIsOpen(true)
  }

  return (
    <>
        <button
          type="button"
          className="block px-10 py-2 text-center text-white font-bold text-1xl mb-10 rounded-full"
          style={{ backgroundColor: '#1B44C8' }}
          onClick={handleButtonClick}
        >
         Add User
        </button>
      <CreateUser isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
    </>
  )
}

export default AddUsert
