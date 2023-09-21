/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_SOME_KEY: string
  readonly VITE_DB_PASSWORD: string
  readonly VITE_PORT: number
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}