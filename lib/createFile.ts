import { writeFile } from 'fs/promises'
import colors from '@colors/colors/safe'
import { toCamelCase } from './sanitizeRoutes'
import _configs from '../defaultConfig'
import { findConfigFile } from './findConfigFile'
import { Configs } from '../types'

export const createFile = async (
  filePath: string,
  language: string
): Promise<void> => {
  // CONFIG OPTIONS

  const { tsContent, jsContent, typescript }: Configs = {
    ..._configs,
    ...findConfigFile()
  }

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
    colors.blue('Click to open the route') + colors.yellow(' => ') + filePath
  )
  console.log(' ')
}
