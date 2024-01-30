import { type RouteComponent, RouteRecordRaw } from 'vue-router'

declare global {
  interface RouterTabel extends RouteRecordRaw {
    name: string
    path: string
    component?: RouteComponent
    redirect?: string
    children?: Array<childrenTabel>
    meta?: metaObj
    icon?: string
    hidden?: boolean
  }
  interface childrenTabel {
    path: string
    name: string
    component?: RouteComponent
    meta?: metaObj
    icon?: string
    hidden?: boolean
  }
  interface metaObj {
    name?: string
    custom?: object
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
