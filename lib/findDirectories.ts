import { resolve } from 'path'
import { dirExists } from './dirExists'
import colors from '@colors/colors/safe'

export const findDirectories = (
  pathOption: string = ''
): {
  rootPath: string
  pagesPath: string
  apiPath: string
} => {
  const isTest = pathOption.includes('test')
  let rootPath
  let pagesPath
  if (pathOption && !isTest) {
    const specificPath = resolve('src', 'pages', 'api', pathOption)
    if (!dirExists(specificPath)) {
      throw colors.red(
        `The path ${pathOption} does not exist. Please specify a valid path under the /api directory.`
      )
    }

    return {
      apiPath: specificPath,
      pagesPath: resolve('src', 'pages'),
      rootPath: resolve('src')
    }
  }

  rootPath = resolve(pathOption)
  console.log(rootPath)
  pagesPath = resolve(pathOption, 'pages')
  if (!dirExists(pagesPath)) {
    pagesPath = resolve(pathOption, 'src', 'pages')
    rootPath = resolve(rootPath, 'src')
  }
  if (!dirExists(pagesPath)) {
    throw colors.red(
      "ERROR: Please run this in your Next.js project root directory or provide a valid path. \nIf you are in your Next.js project, we couldn't find the 'pages' directory.\n"
    )
  }
  const apiPath = resolve(pagesPath, 'api')
  if (!dirExists(apiPath)) {
    throw colors.red(
      "ERROR: We could not find the 'api' directory in your 'pages' directory. \n You either don't have one or you are running this CLI outside your Next.js root directory.\n"
    )
  }
  return {
    rootPath,
    pagesPath,
    apiPath
  }
}
