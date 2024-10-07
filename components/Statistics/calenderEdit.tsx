'use client'
import React from 'react'

interface CalenderEditProps {
  isOpen: boolean
  onClose: () => void
}

const CalenderEdit: React.FC<CalenderEditProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null
  return (
        <div className="fixed inset-0 z-[9999999999] flex justify-center items-center bg-black bg-opacity-60 text-defaultDark">
            <div style={{ width: '55rem' }} className="px-10 py-5 ">
                <div
                    id="home"
                >
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap items-center relative z-10">
                            <div className="w-full px-5 md:w-1/1 lg:w-1/1 mx-auto">
                                <div className="px-10 py-2  bg-white shadow-lg rounded-xl" style={{ marginTop: '3rem' }}>
                                    <div className="-mx-4 popup-content flex flex-wrap">
                                        <div className="w-full px-5 md:w-1/2 lg:w-1/2">
                                            <h2 className="font-semibold text-xl text-black text-left pt-5">Voici 10 proposition de titres SEO pour le mot-clé  “mot-clé”</h2>
                                        </div>
                                        <div className="w-full px-5 md:w-1/2 lg:w-1/2">
                                            <h2 className="font-semibold text-xl text-black text-left pt-5 flex items-center justify-end sm-flex-none">Relancer <a href="#"><img className="px-3" src="/images/hero/repeat.png" /></a></h2>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8 mt-12">
                                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-7" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-8" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-9" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                        <div className="w-full px-5 md:w-1/1 lg:w-1/1">
                                            <div className="flex items-center mb-8">
                                                <input id="default-radio-10" type="radio" value="" name="default-radio" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-orange focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Comment réparer son radiateur automobile ?</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-mx-4 pt-8 flex items-center justify-end">
                                        <div className="px-5 flex justify-center">
                                            <button type="button" style={{ backgroundColor: '#1B44C8' }} className="bg-dark-blue px-6 h-9 rounded-full text-white text-1xl">valider</button>
                                        </div>
                                        <div className="px-5 flex justify-center">
                                            <button type="button" style={{ backgroundColor: '#1B44C8' }} className="bg-dark-blue px-6 h-9 rounded-full text-white text-1xl" onClick={onClose}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CalenderEdit
