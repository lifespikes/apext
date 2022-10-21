import process from 'process'
import colors from '@colors/colors/safe'
import { join } from 'path'
import { isDirectory } from './isDirectory'
import fs from 'fs'

export const findConfigFile = (): any => {
  const routePath = join(process.cwd())
  if (isDirectory(routePath)) {
    // check if file exists
    const jsConfig = `${routePath}/apext.config.js`
    const tsConfig = `${routePath}/apext.config.ts`
    const jsPath = fs.existsSync(jsConfig)
    const tsPath = fs.existsSync(tsConfig)

    if (!jsPath && !tsPath) {
      return {}
    }

    if (jsPath) {
      return require(jsConfig)
    }

    if (tsPath) {
      return require(tsConfig)
    }
    return {}
  }

  throw colors.red(
    "ERROR: Please run this in your Next.js project root directory. \nIf you are in your Next.js project, we couldn't find the 'pages' directory.\n"
  )
}
