import fs from 'fs'
import colors from '@colors/colors/safe'
import { MethodsType } from '../types'

export const methodRegex = /@methods[\s\S]*?]/g
export const commentsRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
/* eslint-disable-next-line no-useless-escape */
export const arrayRegex = /[\s\[\]\@methods]/g

const methodsColors = {
  get: colors.blue,
  post: colors.yellow,
  put: colors.yellow,
  patch: colors.yellow,
  delete: colors.red,
  head: colors.grey
}

/*
 * Get all comments from a file
 */
export const getComments = (path: string): string[] => {
  const content = fs.readFileSync(path, 'utf8')
  return Array.from(content.matchAll(commentsRegex)).map(x => x[0])
}

const colorizeMethods = (methods: string[]): string => {
  return methods
    .map((method) => {
      const methodFn = methodsColors[method.toLocaleLowerCase() as MethodsType]
      return methodFn ? methodFn(method) : colors.grey(method)
    })
    .join('|')
}

/**
 * For each provided comment, matches the first occurrence of the methods regex
 * @param comments
 */
export const getMethodParam = (comments: string[]): string =>
  comments.reduce((acc, comment) => {
    const methodMatch = comment ? comment.match(methodRegex) : null
    if (methodMatch) {
      return colorizeMethods(methodMatch[0]
        .replace(arrayRegex, '')
        .split(',')
        .filter(Boolean))
    }
    return acc
  }, '')
