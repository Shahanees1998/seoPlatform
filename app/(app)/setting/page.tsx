import { getUsers } from 'actions/userActions'
import AddUsert from 'components/Users/addUser'
import React from 'react'

const ClientComponent = async (): Promise<JSX.Element> => {
  const users = await getUsers()
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
                <div className="flex justify-end">
                  <AddUsert />
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <h1 className="text-2xl font-bold mb-5 text-left">Users</h1>
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
                          ID
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="border-r px-6 py-3">
                          Email Verified
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (users as any)?.data?.data?.map((user: any, index: number) => {
                          return (
                            <tr key={index} className="bg-white border dark:bg-gray-800">
                            <th className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {user?.id}
                            </th>
                            <td className="px-6 py-5">
                            {user?.name}
                            </td>
                            <td className="px-6 py-5">
                            {user?.email}
                            </td>
                            <td className="px-6 py-5">
                            {user?.email_verified_at != null ? 'true' : 'false'}
                            </td>

                            <td className="px-6 py-5 flex items-center">
                              <a ><img className="mr-5" src="/images/hero/eye.png" /></a>
                              <a ><img src="/images/hero/link.png" /></a>
                            </td>
                          </tr>
                          )
                        })
                      }

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

export default ClientComponent
