import { Options } from '../types'
import { findApiDir, findPagesDir, traverseDir } from '../lib'
import colors from '@colors/colors/safe'

export const listAction = async (options: Options) => {
  try {
    if (options.path) {
      // output all API routes in the given folder
      const pagesPath = await findPagesDir()
      const apiPath = await findApiDir(pagesPath)
      const pathWithFolder = `${apiPath}/${options.path}`
      await traverseDir(pathWithFolder, `/api/${options.path}`)
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
