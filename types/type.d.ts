import {type RouteComponent} from 'vue-router'

declare global{
  interface RouterTabel{
    path:string;
    name:string;
    component?:RouteComponent,
    redirect?:string,
    children?:Array<childrenTabel>,
    meta?:string
  }
  interface childrenTabel{
    path:string;
    name:string;
    component?:RouteComponent,
    meta?:string
  }
}