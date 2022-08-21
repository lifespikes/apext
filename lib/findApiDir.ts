import colors from '@colors/colors/safe'
import { readdir } from 'fs/promises'
import { isDirectory } from './isDirectory'

export const findApiDir = async (pagesPath: string): Promise<string> => {
  try {
    const dirs = await readdir(pagesPath)
    for (const file of dirs) {
      const absolutePath = `${pagesPath}/${file}`
      if (file === 'api' && isDirectory(absolutePath)) {
        return `${pagesPath}/api`
      }
    }
  } catch (error: any) {
    if (typeof error === 'string') throw colors.red(error)
    else throw error
  }
  throw colors.red(
    'ERROR: We could not find the \'api\' directoy in your \'pages\' directory. \n You either don\'t have one or you are running this CLI outside your Next.js root directory.\n'
  )
}
