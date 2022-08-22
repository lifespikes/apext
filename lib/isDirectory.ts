import fs from 'fs'

export const isDirectory = (path: string): boolean => fs.lstatSync(path).isDirectory()
