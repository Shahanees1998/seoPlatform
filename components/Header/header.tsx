import Link from 'next/link'
import React from 'react'

const HeaderComponent: React.FC = (): JSX.Element => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-white border-b">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="max-w-full px-4">
            <Link href={'/board'} className="navbar-logo block w-full py-5">
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                className="header-logo w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4 relative z-40">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 z-40 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul className="blcok lg:flex 2xl:ml-20">
                  <li className="group relative">
                    <Link
                      href="/bord"
                      className="mx-8 flex py-2 text-base font-semibold text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-grey-200 lg:group-hover:text-blue lg:group-hover:opacity-70"
                    >
                    Tableau de Bord
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/clients"
                      className="mx-8 flex py-2 text-base font-semibold text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                    >
                    Clients
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/statistics"
                      className="mx-8 flex py-2 text-base font-semibold text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                    >
                    Statistiques
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="#"
                      className="mx-8 flex py-2 text-base font-semibold text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                    >
                    Devis
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
