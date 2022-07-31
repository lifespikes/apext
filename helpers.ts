import fs from 'fs'
import { readdir } from 'fs/promises'
import process from 'process'
import colors from '@colors/colors/safe'

export const isDirectory = (path: string) => fs.lstatSync(path).isDirectory()

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

export const findApiDir = async (pagesPath: string) => {
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
    `ERROR: We could not find the 'api' directoy in your 'pages' directory. \n You either don't have one or you are running this CLI outside your Next.js root directory.\n`
  )
}

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
