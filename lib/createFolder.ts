import { mkdir } from 'fs/promises'
import { dirExists } from './dirExists'

export const createFolder = async (path: string) => {
  try {
    if (dirExists(path)) {
      return
    }
    await mkdir(path, { recursive: true })
  } catch (error) {
    console.error(error)
  }
}
