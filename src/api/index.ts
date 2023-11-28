const moduleFills = import.meta.glob('./module/*.ts',{ eager: true })
const routerList = [] as any[]
for (const router in moduleFills) {
  // console.log(routers[router],'单个路由');
  if (moduleFills[router]?.default) {
    routerList.push(moduleFills[router]?.default)
  }
}