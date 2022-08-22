import { resolve } from 'path'
import { dirExists } from './dirExists'
import colors from '@colors/colors/safe'

export const findDirectories = (path: string = ''): {
  rootPath: string
  pagesPath: string
  apiPath: string
} => {
  let rootPath = resolve(path)
  let pagesPath = resolve(path, 'pages')
  if (!dirExists(pagesPath)) {
    pagesPath = resolve(path, 'src', 'pages')
    rootPath = resolve(rootPath, 'src')
  }
  if (!dirExists(pagesPath)) {
    throw colors.red(
      'ERROR: Please run this in your Next.js project root directory or provide a valid path. \nIf you are in your Next.js project, we couldn\'t find the \'pages\' directory.\n'
    )
  }
  const apiPath = resolve(pagesPath, 'api')
  if (!dirExists(apiPath)) {
    throw colors.red(
      'ERROR: We could not find the \'api\' directory in your \'pages\' directory. \n You either don\'t have one or you are running this CLI outside your Next.js root directory.\n'
    )
  }
  return {
    rootPath,
    pagesPath,
    apiPath
  }
}
