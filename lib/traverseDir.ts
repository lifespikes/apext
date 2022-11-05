import { readdir } from 'fs/promises'
import colors from '@colors/colors/safe'
import { isDirectory } from './isDirectory'
import { getComments, getMethodParam } from './parser'
import { join } from 'path'

const printEndpoint = async (
  root: string,
  parent: string,
  file: string
): Promise<string> => {
  const numberOfWhiteSpaces = 47
  const coloredPath = `${parent.replace(
    join(root, 'pages'),
    ''
  )}/${colors.green(file.replace(/\.[^.]*$/, ''))}`
  const comments = getComments(`${parent}/${file}`)
  const methods = getMethodParam(comments)

  const value = numberOfWhiteSpaces - coloredPath.length

  const whiteSpaces = Array(value < 0 ? 0 : value).fill('-')
  whiteSpaces.push('>')
  const arrow = whiteSpaces.join('')

  let res
  if (methods) {
    res = `${coloredPath} ${arrow} ${methods}`
  } else {
    res = `${coloredPath} ${arrow} ${colors.magenta(
      'See: https://apext.vercel.app/docs/methods'
    )}`
  }
  return res
}

export const traverseDir = async (
  root: string,
  path: string,
  _results: string[] = []
): Promise<string[]> => {
  const results = _results
  try {
    const dirs = (await readdir(path)).sort((a, b) => a.localeCompare(b))
    for (const file of dirs) {
      const filePath = join(path, file)
      if (isDirectory(filePath)) {
        await traverseDir(root, filePath, results)
      } else {
        results.push(await printEndpoint(root, path, file))
      }
    }
    return results
  } catch (error: any) {
    if (typeof error === 'string') throw colors.red(error)
    else throw error
  }
}
