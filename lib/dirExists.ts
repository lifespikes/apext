import fs from 'fs'
export const dirExists = (path: string): boolean => {
  try {
    return fs.statSync(path).isDirectory()
  } catch (error) {
    return false
  }
}
