import { Options } from '../types'
import colors from '@colors/colors/safe'
import { list } from '../lib/list'

export const listAction = async (options: Options): Promise<void> => {
  const res = await list(options)
  for (const line of res) {
    console.log(line)
  }
}

export const listDesc = `🎯 ${colors.green(
  'List all API endpoints in your Next.js project.'
)}`
