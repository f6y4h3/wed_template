import router from '@/router'
export function setToken(token: string) {
  window.localStorage.setItem('_token', token)
}
export function getToken(): string {
  return window.localStorage.getItem('_token') || ''
}
export function cleraToken() {
  window.localStorage.removeItem('_token')
  router.replace({ path: '/login' })
}
