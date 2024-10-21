'use server'

import { BASE_URL } from '../constants/constants'
import { getCookieValue } from '../libs/serverHelper'
import { type ActionResponse } from '../types'

interface AddUserPayload {
  email: string
  name: string
  password: string
  role: string
  password_confirmation: string
}

export const addUser = async (
  payload: AddUserPayload
): Promise<ActionResponse> => {
  try {
    const accessToken = getCookieValue('access_token')

    if (accessToken === null) {
      return {
        data: null,
        error: 'Access token is missing',
        success: false
      }
    }

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${accessToken}`)
    myHeaders.append('Content-Type', 'application/json')

    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow'
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const response = await fetch(`${BASE_URL}/api/v1/user/create`, requestOptions)
    const data: any = await response.json()

    if (data?.status === 'success') {
      return {
        data: data?.data,
        error: '',
        success: true
      }
    } else {
      return {
        data,
        error: 'Something went wrong',
        success: false
      }
    }
  } catch (error: any) {
    return {
      data: null,
      error: JSON.stringify(error?.message ?? ''),
      success: false
    }
  }
}

export const getUsers = async (): Promise<ActionResponse> => {
  try {
    const accessToken = getCookieValue('access_token')

    if (accessToken === null) {
      return {
        data: null,
        error: 'Access token is missing',
        success: false
      }
    }

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${accessToken}`)
    myHeaders.append('Content-Type', 'application/json')

    const requestOptions: any = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const response = await fetch(`${BASE_URL}/api/v1/users`, requestOptions)
    const data: any = await response.json()

    if (data?.status === 'success') {
      return {
        data: data?.data,
        error: '',
        success: true
      }
    } else {
      return {
        data,
        error: 'Something went wrong',
        success: false
      }
    }
  } catch (error: any) {
    return {
      data: null,
      error: JSON.stringify(error?.message ?? ''),
      success: false
    }
  }
}
