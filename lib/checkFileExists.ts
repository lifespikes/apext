import fs from 'fs'
import colors from '@colors/colors/safe'

export const checkFileExists = (filePath: string): boolean => {
  const extensions = ['js', 'ts']
  for (const ext of extensions) {
    if (fs.existsSync(`${filePath}.${ext}`)) {
      console.log(colors.red('File already exists'))
      return true
    }
  }
  return false
}
