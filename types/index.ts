export interface Options {
  [key: string]: any
  path?: string
}

export type MethodsType = 'get' | 'post' | 'put' | 'delete'

export interface Configs {
  tsContent: (name: string) => string
  jsContent: (name: string) => string
  typescript: boolean
}
