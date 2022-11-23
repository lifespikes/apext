import colors from '@colors/colors/safe'
import { writeFile } from 'fs/promises'
import { toCamelCase } from './sanitizeRoutes'
import { getConfigs } from './getConfigs'

export const createFile = async (
  filePath: string,
  language: string
): Promise<void> => {
  // CONFIG OPTIONS
  const { jsContent, tsContent, typescript } = getConfigs()

  const file = filePath.split('/').pop() as string // filename.extension
  const filename = toCamelCase(file.split('.')[0] ?? '') // filename
  if (typescript) {
    await writeFile(filePath, tsContent(filename))
  } else {
    if (language === 'ts') {
      await writeFile(filePath, tsContent(filename))
    }
    if (language === 'js') {
      await writeFile(filePath, jsContent(filename))
    }
  }

  console.log(' ')
  console.log(colors.green('Route created successfully!'))
  console.log(
    colors.blue('Click to open the route') +
      colors.yellow(' => ') +
      filePath.split('/pages')[1]
  )
  console.log(' ')
}
