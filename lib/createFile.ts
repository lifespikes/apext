import { writeFile } from 'fs/promises'
import colors from '@colors/colors/safe'
import { capitalizeFirstLetter } from './utils'
import { toCamelCase } from './sanitizeRoutes'

const tsContent = (name: string) => `
import type { NextApiRequest, NextApiResponse } from 'next'

// @methods [GET,POST,PUT,DELETE]

export default async function ${name}(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
    case 'POST':
    case 'PUT':
    case 'DELETE':
    default:
      res.setHeader('Allow', [
        'GET',
        'POST',
        'PUT',
        'DELETE',
    ])
      return res.status(405).end(\`Method \${req.method} Not Allowed\`)
  }
}
`
const jsContent = (name: string) => `

// @methods [GET,POST,PUT,DELETE]

export default async function ${name}(req,res) {

  switch (req.method) {
    case 'GET':
    case 'POST':
    case 'PUT':
    case 'DELETE':
    default:
      res.setHeader('Allow', [
        'GET',
        'POST',
        'PUT',
        'DELETE',
    ])
      return res.status(405).end(\`Method \${req.method} Not Allowed\`)
  }
}
`

export const createFile = async (
  filePath: string,
  language: string
): Promise<void> => {
  const file = filePath.split('/').pop() as string //filename.extension
  const filename = toCamelCase(file.split('.')[0] ?? '') //filename
  if (language === 'ts') {
    await writeFile(filePath, tsContent(filename))
  }
  if (language === 'js') {
    await writeFile(filePath, jsContent(filename))
  }

  console.log(colors.green('Route created successfully!'))
  console.log(colors.blue('Path: ') + filePath)
}
