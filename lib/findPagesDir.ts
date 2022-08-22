import process from 'process'
import colors from '@colors/colors/safe'
import { isDirectory } from './isDirectory'

export const findPagesDir = async (): Promise<string> => {
  const routePath = process.cwd()
  const paths = [`${routePath}/pages`, `${routePath}/src/pages`]
  for (const path of paths) {
    try {
      if (isDirectory(path)) {
        return path
      }
    } catch (error: any) {}
  }
  throw colors.red(
    'ERROR: Please run this in your Next.js project root directory. \nIf you are in your Next.js project, we couldn\'t find the \'pages\' directory.\n'
  )
}
