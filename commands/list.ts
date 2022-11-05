import { Options } from '../types'
import colors from '@colors/colors/safe'
import { findApiDir, findPagesDir, traverseDir } from '../lib'

export const listAction = async (options: Options): Promise<void> => {
  try {
    if (options.path) {
      // output all API routes in the given folder
      const pagesPath = await findPagesDir()
      const apiPath = await findApiDir(pagesPath)
      const path: string = options.path
      const pathWithFolder = `${apiPath}/${path}`
      await traverseDir(pathWithFolder, `/api/${path}`)
    } else {
      // output all API routes in the project
      const pagesPath = await findPagesDir()
      const apiPath = await findApiDir(pagesPath)
      await traverseDir(apiPath)
    }
  } catch (error) {
    console.log(error)
  }
}

export const listDesc = `🎯 ${colors.green(
  'List all API endpoints in your Next.js project.'
)}`
