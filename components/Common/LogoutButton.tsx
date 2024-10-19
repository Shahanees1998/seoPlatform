'use client'
import React from 'react'
import { deleteCookie } from '../../libs/helpers'

const LogoutButton: React.FC = (): JSX.Element => {
  const handleLogout = (): void => {
    deleteCookie('access_token')
    window.location.href = '/auth/login'
  }
  return (
    <button
      className="flex items-center justify-center w-full h-8 mt-6 ml-8 px-4 text-white bg-primary rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default LogoutButton
