import fs from 'fs'

export const isDirectory = (path: string) => fs.lstatSync(path).isDirectory()
