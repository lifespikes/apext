import process from 'process'
import colors from '@colors/colors/safe'
import { join } from 'path'
import { isDirectory } from './isDirectory'

export const findPagesDir = async (path: string = ''): Promise<string> => {
  const routePath = join(process.cwd(), path)
  const paths = [join(routePath, 'pages'), join(routePath, 'pages', 'src')]
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
