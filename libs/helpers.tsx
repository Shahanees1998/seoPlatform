export const setCookie = (name: string, value: string, days?: number): void => {
  let expires = ''
  if (days != null) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000) // Calculate expiration time
    expires = `; expires=${date.toUTCString()}` // Format expiration date
  }
  document.cookie = `${name}=${value ?? ''}${expires}; path=/`
}

export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}
