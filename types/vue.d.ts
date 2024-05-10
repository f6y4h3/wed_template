declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  import Vue from 'vue'

  const component: DefineComponent<typeof DefineComponent> | Vue

  export default component
}
