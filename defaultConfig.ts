export default {
  tsConfig: (name: string): string => `
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
    `,
  jsContent: (name: string): string => `
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
}
