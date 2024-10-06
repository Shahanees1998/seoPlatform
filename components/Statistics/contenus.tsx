import React, { useState } from 'react'
import CalenderEdit from './calenderEdit'

const ContenusComponent: React.FC = (): JSX.Element => {
  const [openNew, setOpenNew] = useState<boolean>(false)
  const [openGraph, setOpenGraph] = useState<boolean>(false)
  const [openCalender, setOpenCalender] = useState<boolean>(false)

  return (
    <>
      {openGraph

        ? <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
          <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-200 py-5 flex justify-between items-center">Comment réparer son radiateur automobile ? <a ><img src="/images/hero/edit.png" /></a></h2>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/2 px-5">
                <h2 className="text-1xl font-bold mb-5 text-left">Mot-clé cible : <span className="font-medium">Réparation radiateur automobile</span></h2>
                <h2 className="text-1xl font-bold mb-5 text-left flex items-center">Lien de publication prod : <a ><img className="px-3" src="/images/hero/graph.png" /></a></h2>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 px-5">
                <select id="tabs" className="bg-gray-50 px-3 py-3 mt-5 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Status</option>
                  <option>Contrat</option>
                  <option>Liste Mots-clés</option>
                  <option>Backlinks</option>
                  <option>Social</option>
                  <option>Configuration IA</option>
                </select>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full grid md:w-1/1 lg:w-1/1 px-5 mb-10 mt-12">
                <a ><img className="w-full" src="/images/hero/graph-img.png" /></a>
              </div>
            </div>

          </div>
        </div>
        : <>
          {openNew &&
            <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
              <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-200 py-5">Créer un contenu</h2>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full grid md:w-1/2 lg:w-1/2 px-5 mb-6">
                    <label className="text-left text-2xl">Sélectionnez un mot-clé</label>
                    <div className="flex items-center flex-wrap">
                      <select id="tabs" className="bg-gray-50 px-3 py-3 mt-4 border shadow-lg border-blue w-95 h-11 text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Mots-clés</option>
                        <option>Contrat</option>
                        <option>Liste Mots-clés</option>
                        <option>Backlinks</option>
                        <option>Social</option>
                        <option>Configuration IA</option>
                      </select>
                      <button type="button" style={{ backgroundColor: '#1B44C8' }} className="h-11 block px-6 py-2 formBtn text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Propose des titres</button>
                    </div>
                  </div>
                  <div className="w-full grid md:w-1/2 lg:w-1/2 px-5 mb-6 ">
                    <label className="text-left text-2xl">Titre SEO</label>
                    <div className="relative">
                      <input type="email" id="email" className="bg-gray-50 px-3 py-3 mt-5 border shadow-lg border-gray-200 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment réparer son radiateur automobile ?" />
                      <a className="absolute right-0 edit-icon"><img src="/images/hero/edit.png" /></a>
                    </div>
                  </div>
                  <div className="w-full grid md:w-1/3 lg:w-1/3 px-5 mb-6">
                    <select id="tabs" className="bg-gray-50 h-11 px-3 py-3 mt-4 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Taille du contenu</option>
                      <option>Contrat</option>
                      <option>Liste Mots-clés</option>
                      <option>Backlinks</option>
                      <option>Social</option>
                      <option>Configuration IA</option>
                    </select>
                  </div>
                  <div className="w-full grid md:w-1/3 lg:w-1/3 px-5 mb-6">
                    <select id="tabs" className="bg-gray-50 px-3 py-3 mt-5 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Rédacteur</option>
                      <option>Contrat</option>
                      <option>Liste Mots-clés</option>
                      <option>Backlinks</option>
                      <option>Social</option>
                      <option>Configuration IA</option>
                    </select>
                  </div>
                  <div className="w-full grid md:w-1/3 lg:w-1/3 px-5 mb-6">
                    <select id="tabs" className="bg-gray-50 px-3 py-3 mt-5 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Priorité</option>
                      <option>Contrat</option>
                      <option>Liste Mots-clés</option>
                      <option>Backlinks</option>
                      <option>Social</option>
                      <option>Configuration IA</option>
                    </select>
                  </div>
                  <div className="w-full grid md:w-1/1 lg:w-1/1 px-5 mb-6 mt-5">
                    <button type="button" className="bg-yellow mx-auto w-max-content px-5 py-3 rounded-lg flex justify-between items-center"><a ><img className="mr-5" src="/images/hero/pre.png" /></a><span className="mr-5">Février</span><a ><img src="/images/hero/next.png" /></a></button>
                  </div>
                  <div className="w-full grid md:w-1/1 lg:w-1/1 px-5 mb-6 mt-5">
                    <a className='cursor-pointer' onClick={() => { setOpenCalender(true) }}><img className="w-full" src="/images/hero/calendar.png" /></a>
                    <div className="flex justify-end">
                      <a href="clients-ajout.html">
                        <button type="button" style={{ backgroundColor: '#1B44C8' }} className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">valider</button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>}
          <>
            <div className="flex justify-end">
              <a >
                <button type="button" onClick={() => { setOpenNew(!openNew) }} style={{ backgroundColor: '#1B44C8' }} className="block px-10 py-2 text-center text-white font-bold text-1xl mb-10 bg-dark-blue rounded-full">Créer un contenu</button>
              </a>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
                  <tr className="">
                    <th scope="col" className="border-r px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Mot-clé
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Titre SEO
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Statut
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Date commande
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Lien
                    </th>
                  </tr>
                </thead>
                <tbody >
                  <tr className="bg-white border dark:bg-gray-800">
                    <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      #1232
                    </th>
                    <td className="px-6 py-5">
                      radiateur auto
                    </td>
                    <td className="px-6 py-5">
                      Comment réparer un rad.
                    </td>
                    <td className="px-6 py-5">
                      <div className="bg-red px-5 py-1 text-white rounded-full text-center">Publication</div>
                    </td>
                    <td className="px-6 py-5">
                      01/08/2024
                    </td>
                    <td className="px-6 py-5 flex items-center">
                      <a ><img className="mr-5" src="/images/hero/link.png" /></a>
                      <a ><img src="/images/hero/eye.png" /></a>

                    </td>
                  </tr>
                  <tr className="bg-white border dark:bg-gray-800">
                    <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      #1232
                    </th>
                    <td className="px-6 py-5">
                      radiateur auto
                    </td>
                    <td className="px-6 py-5">
                      Comment réparer un rad.
                    </td>
                    <td className="px-6 py-5">
                      <div className="bg-red px-5 py-1 text-white rounded-full text-center">Publication</div>
                    </td>
                    <td className="px-6 py-5">
                      01/08/2024
                    </td>
                    <td className="px-6 py-5 flex items-center">
                      <a ><img className="mr-5" src="/images/hero/link.png" /></a>
                      <a onClick={() => { setOpenGraph(true) }}><img src="/images/hero/eye.png" /></a>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        </>}

        <CalenderEdit isOpen={openCalender} onClose={() => { setOpenCalender(false) }} />

    </>
  )
}

export default ContenusComponent
