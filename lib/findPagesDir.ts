import { readdir } from 'fs/promises'
import process from 'process'
import colors from '@colors/colors/safe'
import { isDirectory } from './isDirectory'

export const findPagesDir = async (): Promise<string> => {
  try {
    const dirs = await readdir('.')
    for (const file of dirs) {
      const absolutePath = `${process.cwd()}/${file}`
      if (file === 'src' && isDirectory(absolutePath)) {
        return `${process.cwd()}/src/pages`
      } else if (file === 'pages' && isDirectory(absolutePath)) {
        return `${process.cwd()}/pages`
      }
    }
  } catch (error: any) {
    if (typeof error === 'string') throw colors.red(error)
    else throw error
  }
  throw colors.red(
    `ERROR: Please run this in your Next.js project root directory. \nIf you are in your Next.js project, we couldn't find the 'pages' directory.\n`
  )
}
