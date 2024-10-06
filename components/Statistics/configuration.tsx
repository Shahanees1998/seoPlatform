import React from 'react'

const ConfigurationComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
              <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5">
                    <h2 className="text-2xl font-bold text-left py-5 flex justify-between items-center">Configuration IA <img src="/images/hero/social.png" /></h2>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 flex justify-end items-center sm-flex-none">
                    <div className="w-full border-b border-gray-200 mt-5"></div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/2 px-5 mt-12 mb-10">
                    <select id="tabs" className="bg-gray-50 px-3 py-3 border shadow-lg border-blue text-blue w65 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Prompts</option>
                      <option>Contrat</option>
                      <option>Liste Mots-clés</option>
                      <option>Backlinks</option>
                      <option>Social</option>
                      <option>Configuration IA</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-4">
                    <textarea rows={15} className="bg-gray-50 px-3 py-3 mt-5 shadow-lg text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-10 flex flex-wrap mt-12">
                    <div className="flex justify-center py-5 mx-auto">
                      <a href="clients-ajout.html">
                        <button type="button" style={{ backgroundColor: '#1B44C8' }} className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Valider</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/1 lg:w-1/1 mb-6 mt-12">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th scope="col" className="border-r px-6 py-3">
                              Id
                            </th>
                            <th scope="col" className="border-r px-6 py-3">
                              Date Prompt
                            </th>
                            <th scope="col" className="border-r px-6 py-3">
                              Cible Prompt
                            </th>
                            <th scope="col" className="border-r px-6 py-3">
                              Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-1 border dark:bg-gray-800">
                            <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              #247
                            </th>
                            <td className="px-6 py-5">
                              24/07/2024
                            </td>
                            <td className="px-6 py-5">
                              Titre SEO
                            </td>
                            <td className="px-6 py-5">
                              <a ><img src="/images/hero/edit.png" /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>
    </>
  )
}

export default ConfigurationComponent
