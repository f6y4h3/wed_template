import { type RouteComponent, RouteRecordRaw } from 'vue-router'

declare global {
  interface RouterTabel extends RouteRecordRaw {
    name: string
    path: string
    component?: RouteComponent
    redirect?: string
    children?: Array<childrenTabel>
    meta?: object
    icon?: string
    hidden?: boolean
  }
  interface childrenTabel {
    path: string
    name: string
    component?: RouteComponent
    meta?: object
    icon?: string
    hidden?: boolean
  }

  enum requestMethod {
    GET = 'get',
    POST = 'post',
    delete = 'delete',
    PUT = 'put',
    PATCH = 'patch'
  }

  interface request {
    [key: string]: { method: requestMethod; url: string }
  }
}
