import { readdir } from 'fs/promises'
import colors from '@colors/colors/safe'
import { isDirectory } from './isDirectory'

export const traverseDir = async (path: string, parent: string = '/api') => {
  try {
    const dirs = await readdir(path)
    for (const file of dirs) {
      const absolutePath = `${path}/${file}`
      const relativePath = `${parent}/${file}`
      if (isDirectory(absolutePath)) {
        await traverseDir(absolutePath, relativePath)
      } else {
        const coloredPath = `${parent}/${colors.green(file)}`
        console.log(`${coloredPath}`)
      }
    }
  } catch (error: any) {
    if (typeof error === 'string') throw colors.red(error)
    else throw error
  }
  return
}
