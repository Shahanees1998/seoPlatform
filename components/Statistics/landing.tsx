'use client'

import React, { useState } from 'react'
import ContenusComponent from './contenus'
import ListeComponent from './liste'
import ConfigurationComponent from './configuration'
import SocioComponent from './social'
import BackLinksComponent from './backlinks'
import ContratComponent from './contrat'

const Landing: React.FC = (): JSX.Element => {
  // State to manage the active component
  const [activeComponent, setActiveComponent] = useState('contenus')

  const renderComponent = (): any => {
    switch (activeComponent) {
      case 'contenus':
        return <ContenusComponent />
      case 'liste':
        return <ListeComponent />
      case 'configuration':
        return <ConfigurationComponent />
      case 'social':
        return <SocioComponent />
      case 'backlinks':
        return <BackLinksComponent />
      case 'contrat':
        return <ContratComponent />
      default:
        return <ContenusComponent />
    }
  }

  return (
        <>
            <div
                id="home"
                className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center relative z-10">
                        <div className="w-full px-4 mb-10">
                            <div
                                className="hero-content wow fadeInUp mx-auto text-center"
                                data-wow-delay=".2s"
                            >
                                <div className="w-full md:w-1/1 lg:w-1/1">
                                    <h1 className="text-1xl font-bold mb-5 text-left">Client : <span className="font-medium">Saint Jory radiateurs</span></h1>
                                </div>
                                <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
                                    <div className="web-hidden">
                                        <select id="tabs" className="bg-gray-50 px-3 py-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Contenus</option>
                                            <option>Contrat</option>
                                            <option>Liste Mots-clés</option>
                                            <option>Backlinks</option>
                                            <option>Social</option>
                                            <option>Configuration IA</option>
                                        </select>
                                    </div>
                                    <ul className="hidden text-sm font-medium border text-center text-gray-500 sm:flex dark:divide-gray-700 dark:text-gray-400">
                                        <li onClick={() => { setActiveComponent('contenus') }} className={`w-full focus-within:z-10 ${activeComponent === 'contenus' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-tab-active text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Contenus</a>
                                        </li>
                                        <li onClick={() => { setActiveComponent('contrat') }} className={`w-full focus-within:z-10 ${activeComponent === 'contrat' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-new-light border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Contrat</a>
                                        </li>
                                        <li onClick={() => { setActiveComponent('liste') }} className={`w-full focus-within:z-10 ${activeComponent === 'liste' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-new-light border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Liste Mots-clés</a>
                                        </li>
                                        <li onClick={() => { setActiveComponent('backlinks') }} className={`w-full focus-within:z-10 ${activeComponent === 'backlinks' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-new-light border-r border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Backlinks</a>
                                        </li>
                                        <li onClick={() => { setActiveComponent('social') }} className={`w-full focus-within:z-10 ${activeComponent === 'social' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-new-light border-r border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Social</a>
                                        </li>
                                        <li onClick={() => { setActiveComponent('configuration') }} className={`w-full focus-within:z-10 ${activeComponent === 'configuration' ? 'bg-[#CEF3C8]' : ''}`}>
                                            <a href="#" className="inline-block text-lg font-bold w-full p-4 bg-new-light border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Configuration IA</a>
                                        </li>

                                    </ul>
                                </div>
                                {renderComponent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Landing
