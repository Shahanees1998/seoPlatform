'use server'

import { BASE_URL } from '../constants/constants'
import { getCookieValue } from '../libs/serverHelper'
import { type ActionResponse } from '../types'

export const loginUser = async (
  email: string,
  password: string
): Promise<ActionResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data: any = await response.json()

    if (data?.status === 'success') {
      return {
        data: data?.data,
        error: '',
        success: true
      }
    } else {
      return {
        data: null,
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

export const getUserProfile = async (): Promise<ActionResponse> => {
  try {
    const accessToken = getCookieValue('access_token')

    if (accessToken === null) {
      return {
        data: null,
        error: 'Access token is missing',
        success: false
      }
    }

    const response = await fetch(`${BASE_URL}/api/v1/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
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

    const response = await fetch(`${BASE_URL}/api/v1/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
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
