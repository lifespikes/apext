// regex to replace replace -------> with ->
const regex = /(-*)>/

export const replaceArrows = (str: string): string => str.replace(regex, '->')
