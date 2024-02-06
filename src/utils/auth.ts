import router from '@/router'
// import http from '@/utils/http'

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
// export function Login(){
//   return new Promise((res,rej)=>{
//     // res()
    
//   })
// }