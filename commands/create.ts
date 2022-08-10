import { findApiDir, findPagesDir } from '../lib'
import { createFile } from '../lib/createFile'
import { createFolder } from '../lib/createFolder'
import { Options } from '../types'
import colors from '@colors/colors/safe'
import fs from "fs";

// Ideally this needs to be moved to its own file.
const checkFileExists = (filePath: string) => {
  const extensions = ['js', 'ts'];
  for (const ext of extensions){
    if(fs.existsSync(`${filePath}.${ext}`)){
      console.log(colors.red("File already exists"))
      return true;
    }
  }

  return false;
}

export const createAction = async (name: string, options: Options) => {
  try {
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
      const filePath = `${folderPath}/${name}.${extension}`
      // creates a new file on the folder
      if(checkFileExists(`${folderPath}/${name}`)){
        return;
      }
      await createFile(filePath, extension)
    } else {
      // creates a new file in the api dir
      const filePath = `${apiDir}/${name}.${extension}`

      if(checkFileExists(`${apiDir}/${name}`)){
        return;
      }
      await createFile(filePath, extension)
    }
  } catch (error) {
    console.error(error)
  }
}

export const createDesc = `🎯 ${colors.green('Create a new API route.')}`
