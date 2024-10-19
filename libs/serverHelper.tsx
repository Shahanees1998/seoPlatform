'use server'
import { cookies } from 'next/headers'

export const getCookieValue = (name: string): string | null => {
  try {
    const cookieStore = cookies()
    return cookieStore?.get(name)?.value ?? null
  } catch (error) {
    console.error('getCookieValue error--->', error)
    return null
  }
}
