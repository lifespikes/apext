import { Options } from '../types'
import { findDirectories } from './findDirectories'
import { traverseDir } from './traverseDir'

export const list = async (options: Options): Promise<string[]> => {
  const directories = findDirectories(options.path)
  return await traverseDir(directories.rootPath, directories.apiPath)
}
