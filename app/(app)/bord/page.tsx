import { getUsers } from 'actions/authActions'
import React from 'react'
const HomeComponent = async (): Promise<JSX.Element> => {
  const users = await getUsers()

  console.log('users ======', users?.data)
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
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <h1 className="text-2xl font-bold mb-5 text-left">Tableau de bord</h1>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end items-center">
                    <input type="email" id="email" className="border w100 px-3 mb-5 py-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required />
                  </div>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
                      <tr className="">
                        <th scope="col" className="border-r px-6 py-3">
                          Client
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Date expiration
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Contenus
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Backlinks
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Social
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          31/12/2028
                        </td>
                        <td className="px-6 py-5">
                          60
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          31/12/2028
                        </td>
                        <td className="px-6 py-5">
                          60
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          31/12/2028
                        </td>
                        <td className="px-6 py-5">
                          60
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5">
                          24
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-10">
              <div
                className="hero-content wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <h1 className="text-2xl font-bold mb-5 text-left">Statut des contenus</h1>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end items-center">
                    <input type="email" id="email" className="border w100 px-3 mb-5 py-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required />
                  </div>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
                      <tr className="">
                        <th scope="col" className="border-r px-6 py-3">
                          Client
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Statut
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Contenus
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Backlinks
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Social
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-yellow font-bold">
                          1/2 (50%)
                        </td>
                        <td className="px-6 py-5 text-yellow font-bold">
                          1/2 (50%)
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-red font-bold">
                          0/2 (0%)
                        </td>
                        <td className="px-6 py-5 text-yellow font-bold">
                          1/2 (50%)
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-green font-bold">
                          2/2 (100%)
                        </td>
                        <td className="px-6 py-5 text-yellow font-bold">
                          1/2 (50%)
                        </td>
                        <td className="px-6 py-5 text-yellow font-bold">
                          1/2 (50%)
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-10">
              <div
                className="hero-content wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <h1 className="text-2xl font-bold mb-5 text-left">Derniers contenus</h1>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end items-center">
                    <input type="email" id="email" className="border w100 px-3 mb-5 py-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required />
                  </div>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-left font-semibold text-gray-700 uppercase bg-gray-1 border dark:bg-gray-700 dark:text-gray-400">
                      <tr className="">
                        <th scope="col" className="border-r px-6 py-3">
                          Client
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
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          Réparation radiateurs auto
                        </td>
                        <td className="px-6 py-5">
                          Comment réparer une fuite de radiateurs automobile ?
                        </td>
                        <td className="px-6 py-5">
                          <div className="bg-red px-5 py-1 text-white rounded-full text-center">Publication</div>
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          Réparation radiateurs auto
                        </td>
                        <td className="px-6 py-5">
                          Comment réparer une fuite de radiateurs automobile ?
                        </td>
                        <td className="px-6 py-5">
                          <div className="bg-green px-5 py-1 text-white rounded-full text-center">Corrections</div>
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                      <tr className="bg-white border dark:bg-gray-800">
                        <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Saint Jory radiateurs
                        </th>
                        <td className="px-6 py-5">
                          Réparation radiateurs auto
                        </td>
                        <td className="px-6 py-5">
                          Comment réparer une fuite de radiateurs automobile ?
                        </td>
                        <td className="px-6 py-5">
                          <div className="bg-blue px-5 py-1 text-white rounded-full text-center">Mise à jour</div>
                        </td>
                        <td className="px-6 py-5 flex items-center">
                          <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                          <a ><img src="/images/hero/link.png" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent
