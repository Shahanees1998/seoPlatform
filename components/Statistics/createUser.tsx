'use client'
import React, { useState } from 'react'

interface CreateUserProps {
  isOpen: boolean
  onClose: () => void
}

const CreateUser: React.FC<CreateUserProps> = ({
  isOpen,
  onClose
}) => {
  // State management for form fields
  const [name, setName] = useState('') // State for name
  const [email, setEmail] = useState('') // State for email
  const [password, setPassword] = useState('') // State for password
  const [confirmPassword, setConfirmPassword] = useState('') // State for confirm password
  const [role, setRole] = useState('1') // State for role, default to '1'

  // Validation for enabling the submit button
  const isFormValid = (): boolean => { // Ensure return type is boolean
    return name !== '' && email !== '' && password !== '' && (password === confirmPassword) // Explicitly check for empty strings
  }

  const handleSubmit = (): void => { // Changed return type to void
    if (isFormValid()) {
      // Handle form submission logic here
      console.log({ name, email, password, role })
    }
  }

  if (!isOpen) return null
  return (
        <div style={{ paddingInline: '10px' }} className="fixed inset-0 z-[9999999999] flex justify-center items-center bg-black bg-opacity-60 text-defaultDark">
            <div style={{ width: '45rem' }} className="px-10 py-5 bg-white shadow-lg rounded-xxl">
                <h2 className="font-semibold text-xl text-blue text-center border-b mb-8">Ajouter un User</h2>
                <div className="-mx-4 w-full flex flex-wrap">
                    <div className="w-full px-5 md:w-2/4 lg:w-2/4">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nom </label>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir le nom" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/2 lg:w-1/2">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir l’adresse e-mail" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/2">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password  </label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir le mot de passe" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/2">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Confirm Password  </label>
                            <input type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirmer le mot de passe" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/1 mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Role</label>
                        <div className="flex space-x-4">
                            {['1', '2', '3', '4', '5'].map((value) => (
                                <label key={value} className="flex items-center">
                                    <input type="radio" value={value} checked={role === value} onChange={(e) => { setRole(e.target.value) }} className="mr-2" />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/1 flex justify-center">
                        <button style={{ backgroundColor: '#1B44C8' }} type="button" onClick={handleSubmit} disabled={!isFormValid()} className="bg-blue px-10 py-2 rounded-xl text-white text-xl">Ajouter</button>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/1 flex cursor-pointer justify-center" onClick={onClose}>
                        <img className="mt-4 w-6 h-6" src="/images/hero/Close.png" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CreateUser
