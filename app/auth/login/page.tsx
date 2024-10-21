'use client'

import { loginUser } from 'actions/authActions'
import { useState } from 'react'
import { setCookie } from '../../../libs/helpers'

export default function Home (): JSX.Element {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const login = async (): Promise<void> => {
    if (state?.email?.trim()?.length === 0 || state?.password?.length === 0) {
      alert('Please fill email and password')
      return
    }
    const response = await loginUser(state.email, state.password)
    const accessToken: string | null = response?.data?.access_token ?? null
    if (response?.success && accessToken !== null) {
      setCookie('access_token', accessToken, 1)
      window.location.href = '/bord'
    } else {
      alert('Invalid email or password')
    }
  }

  return (
    <>
      <div className="container">
        <a>
          <h2 className='text-3xl text-dark-700 mt-12 font-bold'>SEO PLatform</h2>
        </a>
        <div
          className="wow fadeInUp"
          data-wow-delay=".2s"
          style={{ visibility: 'visible', animationDelay: '0.2s' }}
        >
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 mt-16 max-w-[540px] lg:mb-0">
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                  Login to continue
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-[40px] sm:leading-[1.2] Nunito">
                  Login to your account
                </h2>
                <div className="mb-[22px] relative">
                  <label className="text-white text-md font-medium">
                    Email
                  </label>
                  <input
                    style={{ marginTop: '0.5rem' }}
                    type="text"
                    name="Email"
                    placeholder="Email"
                    className="bg-dark-Purple w-full dark:text-dark-6 border px-5 py-3 border-Purple dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none"
                    value={state.email}
                    onChange={(e) => {
                      setState({ ...state, email: e.target.value })
                    }}
                  />
                  {/* <img
                    className="absolute right-0 mr-5 mt_5"
                    src="/images/auth/check.png"
                  /> */}
                </div>
                <div className="mb-[22px] relative">
                  <label className="text-white text-md font-medium">
                    Password
                  </label>
                  <input
                    style={{ marginTop: '0.5rem' }}
                    type="text"
                    name="Email"
                    placeholder="***********"
                    className="bg-dark-Purple w-full dark:text-dark-6 border px-5 py-3 border-Purple dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none"
                    value={state.password}
                    onChange={(e) => {
                      setState({ ...state, password: e.target.value })
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        void login()
                      }
                    }}
                  />
                  <img
                    className="absolute right-0 mr-5 mt_6"
                    src="/images/auth/show.png"
                  />
                </div>

                <button
                  onClick={login}
                  type="button"
                  className="inline-flex items-center mt-8 justify-center rounded-xl bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                >
                  Login Account
                  {/* <img className="w-3 ml-5" src="/images/auth/arrow.svg" /> */}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
