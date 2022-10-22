import process from 'process'
import colors from '@colors/colors/safe'
import { join } from 'path'
import { isDirectory } from './isDirectory'
import fs from 'fs'
import { Configs } from '../types'
import defaultConfig from '../defaultConfig'

export const getConfigs = (): Configs => {
  const routePath = join(process.cwd())
  if (isDirectory(routePath)) {
    // check if file exists
    const jsConfig = `${routePath}/apext.config.js`
    const tsConfig = `${routePath}/apext.config.ts`
    const jsPath = fs.existsSync(jsConfig)
    const tsPath = fs.existsSync(tsConfig)

    if (jsPath) {
      return { ...defaultConfig, ...require(jsConfig) }
    }

    if (tsPath) {
      return { ...defaultConfig, ...require(tsConfig) }
    }
    return { ...defaultConfig }
  }

  throw colors.red(
    "ERROR: Please run this in your Next.js project root directory. \nIf you are in your Next.js project, we couldn't find the 'pages' directory.\n"
  )
}
