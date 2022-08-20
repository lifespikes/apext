export const sanitizeRouteName = (name: string): string => {
  return name.replace(/[^a-zA-Z0-9]/g, '')
}

export const toCamelCase = (name: string): string => {
  return name.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}
