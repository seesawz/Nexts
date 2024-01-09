import dayjs from 'dayjs'
import Cookies from 'js-cookie'

export const TokenKey = 'mx-token'

export function getToken(): string | null {

  const clerkJwt = Cookies.get('__session')

  const token = Cookies.get(TokenKey) || clerkJwt 

  return token || null
}

export function setToken(token: string) {
  if (typeof token !== 'string') {
    return
  }
  return Cookies.set(TokenKey, token, {
    expires: 14,
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
