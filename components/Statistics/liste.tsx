import React, { useState } from 'react'

const ListeComponent: React.FC = (): JSX.Element => {
  const [view, setView] = useState<string | null>()
  return (
    <>
      {
        view == null
          ? <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
            <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-200 py-5 flex justify-between items-center">Stratégie des mots-clés <a ><img src="/images/hero/edit.png" /></a></h2>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-5">
                  <div className="flex flex-wrap items-center">
                    <h2 className="text-2xl font-bold text-left mr-3 mb-3">Mot-clé cible :</h2>
                    <input type="email" id="email" className="bg-white px-3 py-2 mb-3 w50 mr-3 border border-gray-200 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Réparation radiateurs" value="Réparation radiateurs" />
                    <button type="button" style={{ backgroundColor: '#1B44C8' }} className="block px-6 py-1 text-center mb-3 text-white font-bold text-1xl bg-dark-blue rounded-full">Propose moi des mots-clés</button>
                  </div>
                </div>
                <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-5">
                  <div className="relative overflow-x-auto mt-12">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-md text-left font-semibold text-gray-700 uppercase table-head dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                          <th scope="col" className="px-6 py-5 flex items-center">
                            <div className="flex items-center mr-3">
                              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            Mot-clé
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Volume mensuel
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Niv concurrence
                          </th>
                          <th scope="col" className="px-6 py-3">
                            <button style={{ backgroundColor: '#1B44C8' }} type="button" className="block px-6 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Ajoute les mots-clés</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="dark:bg-gray-800">
                          <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                            <div className="flex items-center mr-3">
                              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            Réparation radiateurs
                          </th>
                          <td className="px-6 py-2">
                            200
                          </td>
                          <td className="px-6 py-2">
                            45
                          </td>
                          <td className="px-6 py-2">

                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <th className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                            <div className="flex items-center mr-3">
                              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-transparent border-orange rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            Réparation radiateurs
                          </th>
                          <td className="px-6 py-2">
                            200
                          </td>
                          <td className="px-6 py-2">
                            45
                          </td>
                          <td className="px-6 py-2">

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
            <div className="relative overflow-x-auto mt-12">
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
                      Volume mensuel
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Niv Concurrence
                    </th>
                    <th scope="col" className="border-r px-6 py-3">
                      Utilisation
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Lien de l’article
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border dark:bg-gray-800">
                    <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      #1232
                    </th>
                    <td className="px-6 py-5">
                      radiateur auto
                    </td>
                    <td className="px-6 py-5">
                      200
                    </td>
                    <td className="px-6 py-5">
                      45
                    </td>
                    <td className="px-6 py-5">
                      <div className="bg-red px-5 py-1 text-white rounded-full text-center">Déjà utilisé</div>
                    </td>
                    <td className="px-6 py-5 flex items-center">
                      <a ><img className="mr-5" src="/images/hero/link.png" /></a>
                      <a className='cursor-pointer' onClick={() => { setView('1') }} ><img src="/images/hero/eye.png" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          : <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
            <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-200 py-5 flex flex-wrap justify-between items-center">Réparation radiateurs <div className="bg-red px-5 py-1 text-lg text-white rounded-full text-center">Déjà utilisé</div></h2>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-5">
                  <div className="flex flex-wrap items-center">
                    <div className="bg-white show-box px-10 py-5 mr-5 rounded-xl">
                      <div className="flex justify-between mb-3">
                        <h3 className="text-1xl font-bold mb-5 px-5 py-2 text-left">Volume mensuel</h3>
                        <h3 className="text-1xl font-medium mb-5 px-5 py-2 text-left">200</h3>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-1xl font-bold mb-5 px-5 text-left">Niv concurrence</h3>
                        <h3 className="text-1xl font-medium mb-5 px-5 text-left">45</h3>
                      </div>
                    </div>
                    <div className="bg-white show-box px-10 py-5 rounded-xl flex justify-between items-center">
                      <h3 className="text-1xl font-medium px-5 py-2 text-left">saintjoryradiateurs.com/blog</h3>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-12 mb-10">
                  <a ><img src="/images/hero/graph-img.png" className="w-full" /></a>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default ListeComponent
