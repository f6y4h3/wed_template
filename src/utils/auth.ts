import router from '@/router'
// import http from '@/utils/http'

export function setToken({
  access_token,
  refresh_token
}: {
  access_token: string
  refresh_token: string
}) {
  window.localStorage.setItem('_access_token', access_token)
  window.localStorage.setItem('_refresh_token', refresh_token)
}
export function getToken(): string {
  return window.localStorage.getItem('_access_token') || ''
}
export function getRefreshToken(): string {
  return window.localStorage.getItem('_refresh_token') || ''
}
export function cleraToken() {
  window.localStorage.removeItem('_token')
  router.replace({ path: '/login' })
}
