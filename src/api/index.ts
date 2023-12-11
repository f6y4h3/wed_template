import http from '../utils/http'
const moduleFills = import.meta.glob('./module/*.ts', { eager: true })
const apiObj = Object.keys(moduleFills).reduce((modules: { [key: string]: any }, path) => {
  // console.log(modules, path)
  const moduleName: string = path.replace(/^\.\/module\/(.*)\.\w+$/, '$1')
  const value: { [key: string]: any } = moduleFills[path] as { [key: string]: any }
  modules[moduleName] = value?.default
  return modules
}, {})

const API: { [key: string]: any } = {}
Object.keys(apiObj).forEach((api) => {
  Object.assign(API, apiObj[api])
})

const injectRequest = (apis: { [key: string]: any }) => {
  const request: { [key: string]: Function } = {}
  Object.keys(apis).forEach((item) => {
    const { method, url }: { method: requestMethod; url: string } = apis[item]
    request[item] = (dataOrParams = {}) => {
      const param = ['POST', 'PUT', 'DELET'].includes(method.toUpperCase())
        ? dataOrParams
        : { params: dataOrParams }
      return http[method](url, param)
    }
  })
  return request
}

export default injectRequest(API)
