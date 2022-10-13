// @methods [GET, POST, PUT, DELETE]

export default async function name (
  req: any,
  res: any
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
        'DELETE'
      ])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
