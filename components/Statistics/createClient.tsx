'use client'
import { addCustomer } from 'actions/customerActions'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
interface CreateClientProps {
  isOpen: boolean
  onClose: () => void
}

const CreateClient: React.FC<CreateClientProps> = ({
  isOpen,
  onClose
}) => {
  // State management for form fields
  const [name, setName] = useState('') // State for name
  const [email, setEmail] = useState('') // State for email
  const [firstName, setFirstName] = useState('') // State for first name
  const [clientEmail, setClientEmail] = useState('') // State for client email
  const router = useRouter()
  // Validation for enabling the submit button
  const isFormValid = (): boolean => { // Ensure return type is boolean
    return name !== '' && email !== '' && firstName !== '' && clientEmail !== '' // Explicitly check for empty strings
  }

  const handleSubmit = async (): Promise<void> => { // Changed return type to Promise<void> and added async
    if (isFormValid()) {
      const res = await addCustomer({
        email,
        business_name: firstName,
        first_name: firstName,
        last_name: clientEmail
      })
      if (res?.success) {
        router.refresh()
        onClose() // Close the modal after successful submission
      }// Close the modal after successful submission
    }
  }

  if (!isOpen) return null

  return (
        <div style={{ paddingInline: '10px' }} className="fixed inset-0 z-[9999999999] flex justify-center items-center bg-black bg-opacity-60 text-defaultDark">
            <div style={{ width: '45rem' }} className="px-10 py-5 bg-white shadow-lg rounded-xxl">
                <h2 className="font-semibold text-xl text-blue text-center border-b mb-8">Ajouter un client</h2>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-5 md:w-1/2 lg:w-1/2">
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Entreprise</label>
                            <input type="email" value={clientEmail} onChange={(e) => { setClientEmail(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                </div>
                <div className="-mx-4 w-full flex flex-wrap">
                    <div className="w-full px-5 md:w-2/4 lg:w-2/4">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nom </label>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir le nom" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/2 lg:w-1/2">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Prénom </label>
                            <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir le prénom" required />
                        </div>
                    </div>
                    <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Adresse Email  </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="px-5 py-3 bg-light text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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

export default CreateClient
