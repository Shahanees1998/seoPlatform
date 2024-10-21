'use client'

import { addContract } from 'actions/contractActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface LandingProps {
  contarcts: any
}

const ContratComponent: React.FC<LandingProps> = ({ contarcts }) => {
  const [contractName, setContractName] = useState('') // State for contract name
  const [seoDuration, setSEODuration] = useState('') // New state for duration
  const [nacklinksDuration, setBacklinksDuration] = useState('') // New state for duration
  const [tottalSeo, setTottalSeo] = useState('') // State for total SEO content
  const [tottalBacklinks, setTottalBacklinks] = useState('') // State for total backlinks
  const [backlinkBudget, setBacklinkBudget] = useState('') // State for backlink budget
  const [isSubmitting, setIsSubmitting] = useState(false) // State for button loading
  const router = useRouter()
  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true)
    const payload = {
      contract_name: contractName,
      seo: {
        total_articles: parseInt(tottalSeo),
        articles_volume: 5,
        duration_in_months: parseInt(seoDuration)
      },
      backlinks: {
        total_backlinks: parseInt(tottalBacklinks),
        overall_budget: 5000,
        duration_in_months: parseInt(nacklinksDuration)
      },
      social: {
        total_posts: 30,
        posts_per_social_network: JSON.stringify({ facebook: 10, instagram: 10, twitter: 10 }),
        duration_in_months: 12
      }
    }
    try {
      const response = await addContract(payload)
      // Handle response as needed
      if (response?.success) {
        alert('contract created successfully! ')
        router.refresh()
      } else {
        alert('something went wrong')
      }
    } catch (error) {
      console.error('Error submitting data:', error)
    } finally {
      setIsSubmitting(false) // Reset button state
    }
  }

  return (
    <>
      <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
        <div className="w-full bg-grey px-10 py-10 rounded-xl shadow">

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 px-5">
              <h2 className="text-2xl font-bold text-left py-5 flex justify-between items-center">N° de contrat :</h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 px-5 flex justify-end items-center sm-flex-none">
              <select id="tabs" className="bg-gray-50 px-3 py-3 border shadow-lg border-blue text-blue w65 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Status</option>
                <option>Contrat</option>
                <option>Liste Mots-clés</option>
                <option>Backlinks</option>
                <option>Social</option>
                <option>Configuration IA</option>
              </select>
            </div>
            <div className="w-full md:w-1/1 lg:w-1/1 px-5 flex justify-end items-center sm-flex-none">
              <div className="w-full border-b border-gray-200 mt-5"></div>
            </div>
            <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-5">
              <h2 className="text-2xl font-bold text-center py-5">Ajouter un service</h2>
              <div className="flex justify-center">
                <div className="flex items-center mb-4 mr-6">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => { setContractName('SEO') }} />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SEO</label>
                </div>
                <div className="flex items-center mb-4 mr-6">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => { setContractName('Backlinks') }} />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Backlinks</label>
                </div>
                <div className="flex items-center mb-4 mr-6">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => { setContractName('Social') }} />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Social</label>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 px-5 flex justify-end items-center sm-flex-none mt-5">
              <div className="w-full bg-white rounded-xl shadow px-6 py-3 box-h-571">
                <h2 className="text-1xl font-bold mb-5 text-left border-b border-gray-200 py-3 flex justify-between items-center">Configuration SEO</h2>
                <select
                  id="tabs"
                  className="bg-gray-50 px-3 py-3 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => { setSEODuration(e.target.value) }} // Update duration on change
                >
                  {[...Array(12)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <div className="flex justify-end items-center py-5">
                  <h2 className="text-1xl font-bold text-left mr-3">Nombre de contenus total : </h2>
                  <input value={tottalSeo} onChange={(e) => { setTottalSeo(e.target.value) }} type="email" id="email" className="bg-input py-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex justify-end items-center  py-3">
                  <h2 className="text-sm font-medium text-left mr-3">Articles 1 000 mots : </h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="2" />
                  <h2 className="text-sm font-medium text-left mr-3">/mois</h2>
                </div>
                <div className="flex justify-end items-center  py-2">
                  <h2 className="text-sm font-medium text-left mr-3">Articles 750 mots : </h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="10" />
                  <h2 className="text-sm font-medium text-left mr-3">/mois</h2>
                </div>
                <div className="flex justify-end items-center  py-2">
                  <h2 className="text-sm font-medium text-left mr-3">Articles 2 000 mots : </h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="10" />
                  <h2 className="text-sm font-medium text-left mr-3">/mois</h2>
                </div>
                <div className="flex justify-end items-center  py-2">
                  <h2 className="text-sm font-medium text-left mr-3">Articles 2 500 mots : </h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="0" />
                  <h2 className="text-sm font-medium text-left mr-3">/mois</h2>
                </div>
                <div className="flex justify-end items-center  py-2">
                  <h2 className="text-sm font-medium text-left mr-3">Articles </h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="0" />
                  <h2 className="text-sm font-medium text-left mr-3">mots :</h2>
                  <input type="email" id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="0" />
                  <h2 className="text-sm font-medium text-left">/mois</h2>
                </div>
                <div className="flex justify-center py-5 mt-5">
                  <a href="clients-ajout.html">
                    <button type="button" style={{ backgroundColor: '#1B44C8' }}
                      className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Valider</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 px-5 flex justify-end items-center sm-flex-none mt-5">
              <div className="w-full bg-white rounded-xl shadow px-6 py-3 box-h-571">
                <div className="grid gridHold">
                  <div>
                    <h2 className="text-1xl font-bold mb-5 text-left border-b border-gray-200 py-3 flex justify-between items-center">Configuration Backlinks</h2>
                    <select
                  id="tabs"
                  className="bg-gray-50 px-3 py-3 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => { setBacklinksDuration(e.target.value) }} // Update duration on change
                >
                  {[...Array(12)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                    <div className="flex justify-center items-center  py-5">
                      <h2 className="text-1xl font-bold text-left mr-3">Nombre de backlinks :  </h2>
                      <input value={tottalBacklinks} onChange={(e) => { setTottalBacklinks(e.target.value) }} type="email" id="email" className="bg-input py-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                    <div className="flex justify-center items-center  py-3">
                      <h2 className="text-sm font-medium text-left mr-3">Budget backlinks : </h2>
                      <input value={backlinkBudget} onChange={(e) => { setBacklinkBudget(e.target.value) }} id="email" className="bg-input px-3 py-3 mr-3 border numberInput border-gray-200 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="flex justify-center py-5 mt-5">
                    <a href="clients-ajout.html">
                      <button type="button" style={{ backgroundColor: '#1B44C8' }}
                        className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Valider</button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 px-5 flex justify-end items-center sm-flex-none mt-5 opacity-box">
              <div className="w-full bg-white rounded-xl shadow px-8 py-3 box-h-571">
                <div className="grid gridHold">
                  <div>
                    <h2 className="text-1xl font-bold mb-5 text-left border-b border-gray-200 py-3 flex justify-between items-center">Configuration Backlinks</h2>
                    <select id="tabs" className="bg-gray-50 px-3 py-3 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Durée</option>
                      <option>Contrat</option>
                      <option>Liste Mots-clés</option>
                      <option>Backlinks</option>
                      <option>Social</option>
                      <option>Configuration IA</option>
                    </select>
                  </div>
                  <div className="flex justify-center py-5 mt-5">
                    <a href="clients-ajout.html">
                      <button type="button" style={{ backgroundColor: '#1B44C8' }}
                        className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Valider</button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/1 lg:w-1/1 mb-6 mt-12">
        <div className="flex justify-end">
            <button
              type="button"
              style={{ backgroundColor: '#1B44C8' }}
              className={`block px-10 py-2 text-center text-white font-bold text-1xl mb-10 bg-dark-blue rounded-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={isSubmitting} // Disable button when submitting
            >
              Ajouter un contrat
            </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" className="border-r px-6 py-3">
                  Id
                </th>
                <th scope="col" className="border-r px-6 py-3">
                  Name
                </th>
                <th scope="col" className="border-r px-6 py-3">
                  Date contrat
                </th>
                <th scope="col" className="border-r px-6 py-3">
                  Durée
                </th>
                <th scope="col" className="border-r px-6 py-3">
                  Contenus
                </th>
                <th scope="col" className="border-r px-6 py-3">
                  Backlinks
                </th>
                <th scope="col" className="px-6 py-3">
                  Social
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contarcts?.data?.map((item: any, index: number) => {
                return (
                  <tr key={index} className="bg-gray-1 border dark:bg-gray-800">
                  <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.id}
                  </th>
                  <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.contract_name}
                  </th>
                  <td className="px-6 py-5">
                    {item?.created_at}
                  </td>
                  <td className="px-6 py-5">
                    12 mois
                  </td>
                  <td className="px-6 py-5">
                    45
                  </td>
                  <td className="px-6 py-5">
                    12
                  </td>
                  <td className="px-6 py-5">
                    0
                  </td>
                  <td className="px-6 py-5 flex items-center">
                    <a ><img src="/images/hero/eye.png" /></a>
                  </td>
                </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default ContratComponent
