import { findApiDir, findPagesDir } from '../lib'
import { createFile } from '../lib/createFile'
import { createFolder } from '../lib/createFolder'
import { Options } from '../types'

export const createAction = async (options: Options) => {
  try {
    if (!options.name) throw 'Missing flag --name=<name>'
    const extension = options.ts ? 'ts' : 'js'
    const pagesDir = await findPagesDir()
    const apiDir = await findApiDir(pagesDir)

    if (options.path) {
      const path = options.path.replace(/^\/*/, '')
      const folderPath = `${apiDir}/${path}`
      // creates a new folder if it doesn't exist
      // only needed here, because if no path is provided,
      // the file will be created in the api dir
      await createFolder(folderPath)
      const filePath = `${folderPath}/${options.name}.${extension}`
      // creates a new file on the folder
      await createFile(filePath, extension)
    } else {
      // creates a new file in the api dir
      const filePath = `${apiDir}/${options.name}.${extension}`
      await createFile(filePath, extension)
    }
  } catch (error) {
    console.error(error)
  }
}
