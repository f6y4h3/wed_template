import {type RouteComponent ,RouteRecordRaw} from 'vue-router'

declare global{
  interface RouterTabel extends RouteRecordRaw{
    name:string;
    path:string,
    component?:RouteComponent,
    redirect?:string,
    children?:Array<childrenTabel>,
    meta?:string
    icon?:string
    hidden?:boolean
  }
  interface childrenTabel{
    path:string;
    name:string;
    component?:RouteComponent,
    meta?:string,
    icon?:string
    hidden?:boolean
  }
}